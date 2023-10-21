//importing mongoose library
const mongoose = require('mongoose');

// building a anonymouse function to make connection with db through mongoose
(async () =>{
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/LMS");
    }catch(err){
        console.log("Error Connecting to db in connect phase" + err);
    }
})();

module.exports ={
    dbConnection : () =>  mongoose.connection
}

