const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
  name :{
    type : String,
    required: ture
  },
  email :{
    type:String,
    required: ture
  },
  age:{
    type : Number,
    required: ture
  },
  date:{
    type: Date,
    required: ture,
    default: Date.now
    
  }
})

module.exports= mongoose.model("UsersSchema",usersSchema)