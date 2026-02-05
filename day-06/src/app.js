/*

   1. Server ko create krna hai
   2. Server ko config krna hai

*/

const express = require("express");
const app = express();    // Server create kr dia hai yha pr

app.get("/", (req, res) => {
    res.send("Hello World! This is my first express server.");
}); // Route configure kr dia hai yha pr

module.exports = app;