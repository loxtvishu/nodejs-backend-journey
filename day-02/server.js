const express = require("express");
const app = express();   // server create kia hai 

app.get("/",(req,res)=>{
    res.send("Hello World , Welcome to the World of Backend!")
})

app.get("/about",function (req,res) {
    res.send("Yor're move to About Page.")
})

app.get("/home",(req,res)=>{
    res.send("This is Home Page");
})
app.get("/product",function (req,res) {
    res.send("You're move on Product Page.")
})
app.listen(3000);