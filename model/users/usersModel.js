const mongoose = require('mongoose');
const {isEmail} = require('validator')
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        validate: {
          validator: isEmail,
          message: 'Invalid email format'
        }
    },
    phoneNumber:{
        type:String,
        unique:true,
    }
})

const user = mongoose.model('users',userSchema);

module.exports = user;