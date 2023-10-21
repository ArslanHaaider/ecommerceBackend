const mongoose = require('mongoose');

const cartsSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    items:{
        type:mongoose.Schema.Types.Array,
        required:true,
    },
    totalPrice:{
        type:Number
    }
});

const Cart = mongoose.model('carts',cartsSchema);

module.exports = Cart;

