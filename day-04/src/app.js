/*

    1. Server Create Karna 
    2. Server ko Config krna

*/

const express = require("express")
const app = express();  // Server ko Create krna 

app.use(express.json())

const notes = [];

/*
       -- /notes API CREATED --

       1. Get Method
       2. notes API 

*/

app.get("/notes", function (req, res) {
    res.send(notes);
})

/*
       -- /notes API CREATED --

       1. Post Method
       2. notes API 

*/
app.post("/notes", (req, res) => {
    notes.push(req.body)
    console.log(notes);
    res.send("Notes Created ! ")

})

/*
       -- /notes API CREATED --

       1. DELETE Method

       2. params
       3. /notes API ===> index No. dena hai 
       4. : ==> Dynamic Value ke lie 

*/

app.delete("/notes/:index", (req, res) => {
    console.log(req.params.index);
    delete notes[req.params.index]
    res.send("notes Deleted Sucessfully ! ")

})

/*
       -- /notes API CREATED --

       1. Patch Method
       2. /notes API 
       3. : ==> Dynamic Value ke lie
       4. req.body ==> data contain rahega ko aap update karna chate ho 
       5. Ex :- req.body ==> {description :- "Sample Modified description."} 

*/




module.exports = app