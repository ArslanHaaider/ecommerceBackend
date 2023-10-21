const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories",
        required:true,
    },
    stock:{
        type:Number,
        required:true
    }
})

const product = mongoose.model('products',productsSchema);

module.exports = product