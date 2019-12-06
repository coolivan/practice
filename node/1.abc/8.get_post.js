const http = require('http');
const url = require('url');
const querystring = require('querystring');
 
let server = http.createServer((req,res)=>{
    console.log(req.method);
    let path='',data ={};

    if(req.method == "GET"){
        let {pathname,query} = url.parse(req.url,true);
        path = pathname;
        data = query;
        
        complete()
    }else if(req.method == 'POST'){
        let arr = [];
        path = req.url;

        req.on('data',buffer=>{
            arr.push(buffer)
        })

        req.on('end',()=>{
            let buffer = Buffer.concat(arr);
            data = querystring.parse(buffer.toString());
            complete()
        })
        
    }

    function complete(){
        console.log(path,data);
        res.end();
    }

   
    
})




server.listen(3000)