

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // console.log(req.url, req.method);
    // console.log("New request made");
    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hello</h1>');
    // res.end();

    res.setHeader('Content-Type','text/html');

    //routing
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end();       
        }
        else{
            res.write(data);
            res.end();
        }
    });

});

server.listen(3000,'localhost',()=>{
    console.log("listening for requests on port 3000");
})

