let maria = require('mysql');
let conn = maria.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1q2w3e$R',
    database : 'portfolio'
});

conn.connect();

conn.query('select * from board', function(err, res){
    if(err){
        console.log("error: " + err);
    }
    console.log("res: " + res);
});

conn.end();