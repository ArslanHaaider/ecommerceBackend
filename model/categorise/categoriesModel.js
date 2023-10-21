const mongoose = require('mongoose');
const { isEmail } = require('validator');
const categoriesSchema = new mongoose.Schema({
    categoryName:{
        type:String ,
        unique:true,
        required:true,
    },
    Description:{
        type:String
    },
    products:{
        type:mongoose.Schema.Types.Array,
        products:[{type:mongoose.Schema.Types.ObjectI,ref:'products'}],
    }
})
const Categories = mongoose.model('categories',categoriesSchema)

module.exports = Categories;