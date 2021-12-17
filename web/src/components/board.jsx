import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

function App(props) {
    const [viewContent, setViewContent] = useState([]);
    const url = "http://175.215.49.230:3001/board";
    
    useEffect(() => {
        axios.get(url).then(function(res){
            setViewContent(res.data);
        })
        .catch(function(err){
            console.log("err: " + err);
        });
    }, []);
    console.log(viewContent);
    const boardList = viewContent.map((data, idx) => <li key={idx}>{data.title}</li>);

    return (
        <div>
            <ul>
                {boardList}
            </ul>
        </div>
    );
}

export default App;