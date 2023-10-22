var express = require('express');
var router = express.Router();
let userCallbacks = require('../controller/userController')
/* create new  user  a sign up */
router.post('/signUp',userCallbacks.signUp);
// logs in the user
router.post('/login',userCallbacks.login);
//gets all user
router.get('/getAllUser',userCallbacks.getAlluser);
//updates selective user
router.put('/updateUser/:id',userCallbacks.update);
//deletes seletive user
router.delete('/deleteUser/:id',userCallbacks.deleteUser);

module.exports = router;
