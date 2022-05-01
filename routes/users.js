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

router.get('/:id',getUser,function(req,res){
  
  res.json(res.user)
})
 
// posting data 

router.post('/post/',async(req,res)=>{




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



// update user by id 

router.patch('/:id',getUser ,async(req,res)=>{
 
  if(req.body.name){
    res.user.name=req.body.name

  }
  if(req.body.email){
    res.user.email= req.body.email
  }
  
  if(req.body.age){
    if(res.user.age!==req.body.age){
      res.user.age =req.body.age
    }
  }
  try{
   const updatedUser= await res.user.save()
   res.json(
     updatedUser
   )
  }catch(err){
    res.status(400).json({"message":"fail to update user"})
  }
})

// delete user by id 

router.delete('/:id',getUser,async(req,res,next)=>{
  try{
    await res.user.remove()
    res.status(201).json({"message":"delated user"})
  }
  catch(err){
    res.status(404).json({
      "message":"failed to delate user"
    })
  }
})



// midelware to get user
async function getUser(req,res,next){
  let user 
  try{
    user = await usersSchema.findById(req.params.id)
    if(user ==null){
      return res.status(404).json({"message":"user not found"})
    }
    
  }
  catch(err){
    return res.status(500).json({"message":"falid to find user "})
  }

  res.user=user
  next()
  
}
// export router 

module.exports = router;
