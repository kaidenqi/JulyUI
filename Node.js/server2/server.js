

const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
        if(req.url === '/'){
            fs.createReadStream(__dirname+"/index.html")
              .pipe(res)
        }
        //assignment:3. Move the image to the center of the page in NodeServer.
        else if(req.url === '/tennis'){
            fs.readFile(__dirname+'/image/tennis.jpg', function(err, data){
                if(err){
                    console.log(err.message)
                }
                else{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write('<div style="width: 100%; height: 100%; position:absolute; display:flex; justify-content:center; align-items:center"><img style="display:block; height:400px; width:400px" src="data:image/jpg; base64,')
                    res.write(Buffer.from(data).toString('base64'));
                    res.write('"/></div>')
                    console.log(data);
                }
            })
        }
        else if(req.url === '/api'){
            res.writeHead(200,{'Content-Type':'text/json'});

            let obj = {
                firstName:"Dark",
                lastName:"Knight"
            };

            res.end(JSON.stringify(obj))
        }
        //assignment: 4. Display error messages to the client
        else{
            fs.readFile('./404.html',(err,data)=>{
                if(err){
                    console.log(err);
                    res.end();       
                }
                else{
                    res.write(data);
                    res.end();
                }
            })
        }


    }).listen("3000")