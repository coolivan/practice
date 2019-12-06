const mysql = require('mysql');


let db = mysql.createPool({
    // connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
});

let sql = 'SELECT * FROM users';
db.getConnection((error,connetion)=>{
    if(error) throw error;
    connetion.query(sql,(err,data)=>{
        if(err) throw err;
        console.log(JSON.stringify(data));
    });

    connetion.release();
})
