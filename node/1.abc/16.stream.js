const fs  = require('fs');

let rs = fs.createReadStream('fs.txt');
let ws = fs.createWriteStream('tream.txt');

rs.pipe(ws);

rs.on('error',err=>{
    console.log(err);
})

ws.on('finish',()=>{
    console.log('ok');
})