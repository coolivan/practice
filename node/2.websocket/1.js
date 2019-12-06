const http = require('http');
const io = require('socket.io');

//1.建立普通http
let server = http.createServer((req,res)=>{})
server.listen(3000)


//2.建立ws
let ws = io.listen(server)

ws.on('connection',sock=>{
    //sock.emit('name',数据)
    //sock.on('name',function(){})

    // sock.on('aaa',(a,b)=>{
    //     console.log(a,b);
    // })

    setInterval(function(){
        sock.emit('timer',new Date().getTime())
    },1000)
})

