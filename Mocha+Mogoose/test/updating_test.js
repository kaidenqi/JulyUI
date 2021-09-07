const mongoose = require('mongoose')
const GameChar = require('../models/gameChar')
const assert = require('assert')

describe("Updating Records", function(){
    beforeEach(function(done){
        var char = new GameChar({
            name:"Kimmy",
            weight:60
        })
        char.save().then(function(){
            assert(char.isNew === false);
            
        })
        done();
        
    })

    it("Updates a record in the database", function(done){
        GameChar.findOneAndUpdate({name:"Kim"},{name:"NewName"}).then(function(){
            GameChar.findOne({_id:char._id}).then(function(result){
                assert(result.name === 'NewName')
                done();
            }).catch(error=>console.log(error))
            
        })
    })    
})