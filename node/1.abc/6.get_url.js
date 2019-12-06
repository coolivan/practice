const http = require('http');
const url = require('url');

let server = http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true)//true处理参数为json
   
    console.log(pathname,query);
    
    
})




server.listen(3000)