const mongoose = require('mongoose')
const chalk = require('chalk')
const log = console.log
mongoose.Promise = global.Promise;

//#region 
// log(chalk.blue("Hello")+ ' World'+chalk.red('!'))
// log(chalk.blue.bgRed.bold("Hello World"))
// log(chalk.green.inverse("Hello World"))
//#endregion

//run before all the tests 
before(function(done){
    mongoose.connect("mongodb://localhost:27017/mocha"); //mocha 是 database
    mongoose.connection.once('open', ()=>{
        log(chalk.green.inverse('Connection has been made!!!'))
        done();
    }).on('error', (error)=>{
        log(chalk.red.inverse('Connection Error'+ error.message))
    })
});
//runs before each test
beforeEach(function(done){
    mongoose.connection.collections.gamechars.drop(function(){
        done();
    })
})




