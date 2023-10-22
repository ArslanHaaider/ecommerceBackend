const userCollection = require('../model/users/usersModel');
const cartCollection = require('../model/cart/cartsModel')
module.exports = {
    signUp: async (data) =>{
        const newUser = new userCollection(data);
        const user= await newUser.save();
        const newCart = new cartCollection({userId:user._id,items:[],totalPrice:0})
        const cart = await newCart.save();
        return user 
    },
    getAllUsers: async() =>{
        try{
            const users = await userCollection.find({});
            return users
        }catch(err){
            return "ERRoR:" + err;
        }
    },
    login:async(data) =>{

    },
    delete:async(userId) =>{
        try{
            const deletedUser = await userCollection.findByIdAndRemove(userId);
            await cartCollection.findOneAndDelete({userId:userId})
            return deletedUser
        }catch(err){
            return "Error found" +err;
        }
    },
    update:async(userId,data) =>{
        try{
            const update = await  userCollection.findByIdAndUpdate(userId,data,{new:true});
            return update
        }catch(err){
            return "Error found" + err;
        }
    }
}