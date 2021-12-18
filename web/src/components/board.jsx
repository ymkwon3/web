import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import '../css/App.css';
import '../css/Board.css';

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
    const boardList = viewContent.map((data, idx) => 
        <li className='post flex-column' key={idx}>
            <div className="flex-row">
                <div className='flex-column'>
                    <div className='post-title'>{data.title}</div>
                    <div className='post-writer'>작성자: {data.writer}</div>
                </div>
                <div className='flex-row'>
                    수정 삭제
                </div>
            </div>
            <div className="post-content post-hide">
                내용입니다.
            </div>
            
            
        </li>
    );

    return (
        <div className='board'>
            <ul>
                {boardList}
            </ul>
        </div>
    );
}

export default App;