/*

     Yha pr hum Server ko Database se connect krne wale hai.

 ==>  Server ko Database se connect krne ke lie require steps 

            1. Mongoose ko install krna hai
            2. Mongoose ko import krna hai
            3. Mongoose se database se connect krna hai

*/

const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect("mongodb+srv://Vishu:t89DvGnWUrAhUrEk@cluster0.z2mcqmy.mongodb.net/day-07")
        .then(function () {
            console.log("Connected to database");
        })
}

module.exports = connectToDb;