let maria = require('mysql');
let conn = maria.createConnection({
    host : '175.215.49.230',
    user : 'root',
    password : '1q2w3e4r',
    database : 'portfolio'
});

conn.connect();

conn.query('insert into board(title, content, writer, password, date) values (?, ?, ?, ?, ?)', ['hello', 'this is content', 'Kim', '1q2w3e4r', '2021-12-09 23:09'], function(err, res){
    if(err){
        console.log("error: " + err);
    }
    console.log("res: " + res);
});
// conn.query('delete from board where title = \'test2\'', function(err, res){
//     if(err){
//         console.log("error: " + err);
//     }
//     console.log("res: " + res);
// });
conn.query('select * from board', function(err, res){
    if(err){
        console.log("error: " + err);
    }
    console.log("res: " + res[0].title + " " + res[0].content);
});

conn.end();