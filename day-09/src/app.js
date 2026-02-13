/*
      1.Server ko Create krna hota hai 
      2.Server ko database se connect krna hota hai 

*/

const express = require("express");
const noteModel = require("./models/note.model");
const app = express();
app.use(express.json())

/*
             ==> /api/notes API <==

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


/*
             ==> "/api/notes" API <==

             1. get method 
             2. fetch all data from mongodb and send them in the response.
             3. req.body ==> {title,description}

*/

app.get("/api/notes", async function (req, res) {
      const notes = await noteModel.find()
      res.status(200).json({
            message: "Notes Fetched Sucessfully.",
            notes
      })
})

/*
             ==> "/api/notes" API <==

             1. DELETE method 
             2. delete note with the id from req.params 
             3. req.body ==> {title,description}

*/

app.delete("/api/notes/:id", async (req, res) => {
      const id = req.params.id
      await noteModel.findByIdAndDelete(id)
      res.status(200).json({
            message: "Note Deleted Sucessfully"
      })

})

/*
             ==> "/api/notes/:id" API <==

             1. PATCH method 
             2. update the description of the note by id
             3. req.body ==> {description}

*/


app.patch("/api/notes/:id", async function (req, res) {
      const id = req.params.id
      const { description } = req.body
      await noteModel.findByIdAndUpdate(id, { description })
      res.status(200).json({
            message: "Note Update Sucessfully"
      })
})

module.exports = app