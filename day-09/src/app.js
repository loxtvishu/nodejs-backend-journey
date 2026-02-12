/*
      1.Server ko Create krna hota hai 
      2.Server ko database se connect krna hota hai 

*/

const express = require("express");
const noteModel = require("./models/note.model");
const app = express();

/*
             ==> /notes API <==

             1. post method 
             2. create new note and save data in mongodb
             3. req.body ==> {title,description}

*/

app.post("/api/notes", async function (req, res) {
      const { title, description } = req.body

      const note = await noteModel.create({
            title, description
      })
      res.status(201).json({
            message: "note created sucessfully",
            note

      })
})

module.exports = app