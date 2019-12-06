let http = require('http');

let allowOrigin = {
  "http://aaa.com":true,
  "http://bbb.com":true,
  "http://127.0.0.1:5502":true
}

http.createServer((req,res)=>{
  let {origin} = req.headers;

  console.log(req.headers);
  

  if(allowOrigin[origin]){
    res.setHeader('access-control-allow-origin','*');
  }

  console.log(getClientIP(req));
  

  res.write('{"a":1,"b":2}')
  res.end();




  


     
}).listen(3000)




function getClientIP(req) {
  return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
      req.connection.remoteAddress || // 判断 connection 的远程 IP
      req.socket.remoteAddress || // 判断后端的 socket 的 IP
      req.connection.socket.remoteAddress;
};