const http = require('http');

let server = http.createServer((req,res)=>{
    res.write('abc');
    console.log(req.url);
    
    res.end();
    
})

server.listen(3000)
