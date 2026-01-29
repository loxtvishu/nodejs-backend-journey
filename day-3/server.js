const express = require("express");
const app = express();
app.use(express.json());
const notes = []

app.post("/notes",function (req,res) {
    console.log(req.body);
    notes.push(req.body)
    res.send("Note Created");
})
app.get("/notes",function (req,res) {
    res.send(notes);
})
app.listen(3000, () => {
    console.log("Server is running on Port No 3000");

})