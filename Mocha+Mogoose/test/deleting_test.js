const mongoose = require('mongoose')
const GameChar = require('../models/gameChar')
const assert = require('assert')

describe('Deleting Records', function(){
   
    beforeEach(function(done){
        //documents: an instance of Model
        var char = new GameChar({ 
            name:"Sally",
            weight:60
        })
        char.save().then(function(){
            assert(char.isNew === false);
        })
        // .catch((error)=>{console.log(error); done()})
        done();
    })
    it("Deletes one record from the database", function(done){
        GameChar.findOneAndRemove({name:'Sally'}).then(function(){
            GameChar.findOne({name:'Sally'}).then(function(result){
                assert(result === null)
            })
            done()
        })
    })
})