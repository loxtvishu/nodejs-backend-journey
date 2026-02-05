const express = require('express');
const app = express();

const noteModel = require('./models/notes.model');

app.post("/notes",(req,res)=>{
  
})

app.use(express.json());

module.exports = app;
