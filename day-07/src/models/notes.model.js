/*
    1. Yha pr hum database ke ander notes ke lie Schema Create krne wale hai.
            ==> Schema ==> Schema ek aisa structure hai jisme hum ye define krte hai ki database ke ander kis type ka data store hoga.
    
    2. Crud Operations 
       ==> eske lie hum ek model create krte hai


*/

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:String,
    description:String
})

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;