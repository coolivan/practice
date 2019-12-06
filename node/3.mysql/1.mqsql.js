const mysql = require('mysql');


let db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'node'
});

db.connect();

let sql = 'SELECT * FROM users';

db.query(sql,(err,data)=>{
    if(err) throw err;
    console.log(JSON.stringify(data));
});

db.end();


