const mysql = require('mysql');


let config = {
    // connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
};


let connetion;
function reconnect(){
    connetion = mysql.createConnection(config);
    connetion.connect(err=>{
        if(err){
            console.log('进行断线生重连：',new Date());
            setTimeout(reconnect,2000);
            return;
        }
        console.log('连接成功');
    });

    connetion.on('error',err=>{
        console.log(err);
        if(err.code == 'ECONNRESET'){
            reconnect()
        }else{
            throw err;
        }
    })
}

reconnect();

let sql = 'SELECT * FROM users';
connetion.query(sql,(err,data)=>{
    if(err) throw err;

    console.log(JSON.stringify(data));
})