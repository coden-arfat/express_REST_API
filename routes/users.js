const express = require('express');
const router = express.Router();
const usersSchema=require('../models/user_model')

// get all data 

router.get('/', function(req, res, next) {
  const data ={
    'name ': ' yasin arfat',
    'email ': 'xyz@email.com',
    'date': Date.now,
    'age ': 18,
  }
  res.json(data)
}); 

// get data by id

router.get('/users/:id',function(req,res,next){
  
  res.send(req.params.id)
})

// update data by id 

router.patch('/users/:id',function(req,res,next){
  res.send(req.params.id)
})

// delete data by id 

router.delete('/users/:id',function(req,res,next){
  res.send(req.params,id)
})

// export router 

module.exports = router;
