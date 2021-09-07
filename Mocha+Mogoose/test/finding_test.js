// const mongoose = require('mongoose')
// const GameChar = require('../models/gameChar')
// const assert = require('assert')

// describe("Finding Records", function(){
//     beforeEach(function(done){
//         var char = new GameChar({
//             name:"Kim",
//             weight:60
//         })
//         char.save().then(function(){
//             assert(char.isNew === false);
//             done();
//         })
        
//     })

//     it("Finds a record in the database", function(done){
//         GameChar.findOne({name:"Kim"}).then(function(result){
//             assert(result.name === 'Kim')
//             done();
//         })
        
//     })
       
// })