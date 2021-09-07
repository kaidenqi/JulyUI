const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Create the schema
const GameSchema = new Schema({
    name:String,
    weight:Number
});

// create a Model
const GameChar = mongoose.model('gamechar', GameSchema)
module.exports =  GameChar;