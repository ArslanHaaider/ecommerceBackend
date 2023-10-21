const mongoose = require('mongoose');

const productCart = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'products'
    },
    cartId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'carts'
    }
})

const collection = mongoose.model('productCart',productCart)
module.exports = collection;