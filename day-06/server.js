/*

   1. Server ko run krna hai 
   2. Server ko database se connect krna hai

*/

const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();

app.listen(3000, () => {
   console.log("Server is running on port 3000");
})
