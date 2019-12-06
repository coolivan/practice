const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=>{
    // console.log(req.url);
    fs.readFile(`./html${req.url}`,(err,buffer)=>{
        if(err){
            res.writeHead(404);
            res.write('Not Found');
            res.end();   
        }else{
            res.write(buffer)
            res.end()
        }
        
    })
    
})




server.listen(3000)