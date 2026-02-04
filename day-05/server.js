 /*
     1. Server ko Start karna hai
     2. Server ko database se connect karna hai

*/

const app = require("./src/app")
const mongoose = require("mongoose");

function connectToDb() {
   mongoose.connect("mongodb+srv://2003vishusaini_db_user:JCLpA1jZGlU7a01P@cluster0.z2mcqmy.mongodb.net/day-05")
   .then(() => {
       console.log("Database Connected Successfully");
   })    //Server ko database se connect kar diya hai
}
connectToDb();
app.listen(3000, function () {
    console.log("Server is Running on Port No. 3000");

})     // Server ko Start kar diya hai