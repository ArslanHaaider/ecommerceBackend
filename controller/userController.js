const userService = require('../services/userService');
const joi = require('joi');

//Defining schema to validate through joi!
const userSchema = joi.object({
    firstName:joi.string().required(),
    lastName:joi.string(),
    email:joi.string().email().required(),
    phoneNumber:joi.string().required()
})

module.exports = {
    signUp:async (req,res) =>{
        //validating data before sending to DB through JOI!
        const { error, value } = userSchema.validate(req.body);
        if (error) {
            console.error('Validation Error:', error.details);
            res.send(error);
        } else {
            const newUser = await userService.signUp(value);
            res.send(newUser);
        }
    },
    login:async(req,res) =>{
        
    },
    getAlluser:async(req,res) =>{
        const users = await userService.getAllUsers();
        res.send(users);
    },
    deleteUser: async(req,res) =>{
        const deleted = await userService.delete(req.params.id,req.body);
        res.send(deleted);
    },
    update: async(req,res) =>{
        const updated = await  userService.update(req.params.id,req.body);
        res.send(updated);
    }
}   