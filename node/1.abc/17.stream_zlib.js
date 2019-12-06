const fs  = require('fs');
const zlib = require('zlib');


let rs = fs.createReadStream('fs.txt');
let ws = fs.createWriteStream('tream.txt.gz');

let gz = zlib.createGzip();
rs.pipe(gz).pipe(ws);

rs.on('error',err=>{
    console.log(err);
})

ws.on('finish',()=>{
    console.log('ok');
})