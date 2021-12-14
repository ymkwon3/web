import { useRef, useEffect } from 'react';
import axios from 'axios';

function App(props) {
    let boardData;

    useEffect(() => {
        const url = "http://175.215.49.230:3001/board";
        axios.get(url).then(function(res){
            boardData = res;
            console.log(boardData);
        })
        .catch(function(err){
            console.log("err: " + err);
        });
    }, []);
    return (
        <div>
            {boardData}
        </div>
    );
}

export default App;