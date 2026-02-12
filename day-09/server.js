/*
      1. Server ko Start krna 
      2. Server ko database se connect krna hota hai
      3. Server ko listen krna hota hai

*/

const app = require("./src/app");

require("dotenv").config();
const connectToDB = require("./src/config/database")
connectToDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");

})
