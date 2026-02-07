const express = require('express');
const app = express();

const noteModel = require('./models/notes.model');
app.use(express.json());

/*
          ===> Get Method <===

          1. /notes api 
          2. fetch all the notes from the database and send it to the client

*/

app.get("/notes", async function (req, res) {
  const notes = await noteModel.find()
  
  res.status(200).json({
    message: "Notes fetched successfully",
    notes
  })
})

/*
      ===> Post Method <===

      1. /notes api
      
*/

app.post("/notes", async (req, res) => {
  const { title, description, age } = req.body
  const note = await noteModel.create({
    title, description, age
  })
  res.status(201).json({
    message: "Note created successfully",
    note
  })
})

app.use(express.json());

module.exports = app;
