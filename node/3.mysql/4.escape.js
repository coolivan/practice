const mysql = require('mysql');


let pool = mysql.createPool(
    {
        connectionLimit:10,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'node'
    }
);

pool.getConnection((error,connetion)=>{
    if(error) throw error;

    let s1 = 'SELECT * FROM users WHERE ID =' + '1 OR ID = 2';
    let s2 = 'SELECT * FROM users WHERE ID =' + connetion.escape('1 OR ID = 2');



    function query(q){
        connetion.query(q,(err,data)=>{
            if(err) throw err;
            console.log(JSON.stringify(data));
            
            // connetion.release();
        });
    
    }
    query(s1);
    query(s2);



})

