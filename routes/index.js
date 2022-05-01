var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: ' Hello Express' });
//   res.send('hello world')
// });

router.get('/',function(req,res,next){

  // res.send('hello i am learning express')
  res.json({'hello':'world'})
}) 

module.exports = router;
