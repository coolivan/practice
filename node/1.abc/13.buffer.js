let buffer = new Buffer('abc\r\nhioeoeho\r\necjknpap1654');

Buffer.prototype.split = Buffer.prototype.split || function(str){
    let arr = [];
    let cur = 0;
    let n = 0;

    while((n=this.indexOf(str,cur)) != -1){
        arr.push(this.slice(cur,n));
        cur = n + str.length;
    }
    arr.push(this.slice(cur));
    return arr;

}
console.log(buffer);

console.log(buffer.split('\r\n').toString());


