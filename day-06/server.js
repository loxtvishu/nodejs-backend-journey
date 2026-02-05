/*

   1. Server ko run krna hai 
   2. Server ko database se connect krna hai

*/

const app = require("./src/app");

const mongoose = require("mongoose");
function connectToDb() {
   mongoose.connect("mongodb+srv://Vishu:t89DvGnWUrAhUrEk@cluster0.z2mcqmy.mongodb.net/day-06")
      .then(function () {
         console.log("Connected to database");
      })
}

connectToDb();

app.listen(3000, () => {
   console.log("Server is running on port 3000");
})
