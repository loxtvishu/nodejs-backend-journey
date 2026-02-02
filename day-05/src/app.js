const express = require("express")
const app = express(); // Server ko create kia hai


app.get("/",(req,res)=>{
    res.send("This is Home Page!")
})



module.exports = app;