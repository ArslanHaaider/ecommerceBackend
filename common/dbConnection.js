const mongoose = require("mongoose");
(async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/LMS');
        // console.log("Connected to the database.");
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
})();

module.exports = {
    dbConnection: () => mongoose.connection,
}

