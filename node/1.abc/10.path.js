const path = require('path');


let str = '/root/a/b/1.txt';

console.log(path.dirname(str));
// /root/a/b

console.log(path.extname(str));
// .txt

console.log(path.basename(str));
//1.txt


console.log(path.resolve(__dirname,'html'));
//__dirname 当前目录




