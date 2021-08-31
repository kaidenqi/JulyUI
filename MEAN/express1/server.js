// let express = require('express')
// let app = express()


// // app.get("/", function(req, res){
// //     res.send('Hello world from server.js')
// // })

// //tell express about static folder
// app.use(express.static(__dirname+'/public'))

// app.listen("3000", "127.0.0.1", function(){
//     console.log("Server listening @3000")
// })

let express = require("express");
let app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello Express");
// })

app.use(express.static(__dirname + '/public'));

app.listen("3000", ()=>{
    console.log("Server listening @3000");
})