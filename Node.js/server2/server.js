

const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
        if(req.url === '/'){
            fs.createReadStream(__dirname+"/index.html")
              .pipe(res)
        }
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
        else{
            res.writeHead(404);
            res.end();
        }


    }).listen("3000")