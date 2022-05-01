const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const usersRouter = require('./routes/users');
const { connect } = require('http2');
const { connected } = require('process');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// connect database using mongoose 

mongoose.connect('mongodb://localhost:27017',{ useNewUrlParser: true })
const db = mongoose.connection

// error hendeler
db.on('error',(error)=> console.error(error))

// if successfully than it will print database connected in console
db.once('open',()=> console.log('database connected'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.listen(3000)
module.exports = app;
