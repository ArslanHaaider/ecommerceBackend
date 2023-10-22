const mongoose = require('mongoose');

const cartsSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        unique:true
    },
    items:{
        type:mongoose.Schema.Types.Array,
        required:true,
    },
    totalPrice:{
        type:Number
    }
});
// cartsSchema.pre('save', function (next) {
//     let total = 0;

//     // Iterate through the items array and calculate the totalPrice
//     this.items.forEach(item => {
//         total += item.price * item.quantity;
//     });

//     this.totalPrice = total;
//     next();
// });

const Cart = mongoose.model('carts',cartsSchema);

module.exports = Cart;

