import { useRef, useEffect } from 'react';
import axios from 'axios';

function App(props) {
    useEffect(() => {
        const url = "http://localhost:3001/board";
        axios.get(url).then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log("err: " + err);
        });
    }, []);
    
    return (
        <div>
            hello
        </div>
    );
}

export default App;