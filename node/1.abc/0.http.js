const http = require('http');

let server = http.createServer(()=>{
	console.log('ok');
})

server.listen(3000)