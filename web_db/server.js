const express = require('express');
const server = express();

const maria = require("./maria");
maria.connect();

const cors = require('cors');
server.use(cors());

server.get('/board',(req, res) => {
    maria.query('select * from board', function(err, rows){
        if(!err){
            console.log("rows: " + rows);
            res.send(rows);
        }else{
            console.log("error: " + err);
            res.send(err);
        }
    });
});

const host = "175.215.49.230";
const port = 3001;

server.listen(port, host, function(){
    console.log("server listening on port 3001");
});