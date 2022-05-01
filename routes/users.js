const express = require('express');
const router = express.Router();
const usersSchema=require('../models/user_model')

// const data = {
//   "name":"yasin arfat",
//   "email":"arfat@example.com",
//   "age":18
// }
// const addUser =new usersSchema(data)

// addUser.save()
// get all data 

router.get('/', async (req, res)=> {
  

    const users = await usersSchema.find()
    return res.json(users)
  

}); 

// get data by id

router.get('/users/:id',function(req,res){
  
  res.send(req.params.id)
})
 
// posting data 

router.post('/post/',async(req,res)=>{

  console.log(  "name :",req.body.name,
  "email:", req.body.email,
  "age:", req.body.age)


  const newUser = new usersSchema({
  "name" : req.body.name,
    "email": req.body.email,
    "age" : req.body.age
  })
 try{
  await newUser.save()
    return res.status('201').json(newUser)
  }
  catch(err){
  res.status('400').json({'message':err.message})
  }



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
