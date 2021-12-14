import { useRef, useEffect } from 'react';
import axios from 'axios';

function App(props) {
    let board = {
        title : '',
        content : '',
        writer : '',
        date : ''
    };
    let boardData = [];

    useEffect(() => {
        const url = "http://175.215.49.230:3001/board";
        axios.get(url).then(function(res){
            boardData = res.data;
        })
        .catch(function(err){
            console.log("err: " + err);
        });
    }, []);
    return (
        <div>
            {boardData[0].title}
        </div>
    );
}

export default App;