const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
  name :{
    type : String,
    required: true
  },
  email :{
    type:String,
    required: true
  },
  age:{
    type : Number,
    required: true
  },
  date:{
    type: Date,
    required: true,
    default: Date.now
    
  }
})



module.exports= mongoose.model("UsersSchema",usersSchema)