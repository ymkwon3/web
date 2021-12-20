import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import '../css/App.css';
import '../css/Board.css';

function App(props) {
    const [viewContent, setViewContent] = useState([]);
    const postRef = useRef([]);
    const url = "http://175.215.49.230:3001/board";
    
    useEffect(() => {
        axios.get(url).then(function(res){
            setViewContent(res.data);
        })
        .catch(function(err){
            console.log("err: " + err);
        });
    }, []);

    const onClickHandler = (e) => {
        console.log("data : " + e);
        postRef.current[e].childNodes[1].className = postRef.current[e].childNodes[1].className === "post-content" ? "post-content post-hide" : "post-content";
        console.log(postRef.current[e].childNodes[1].className)
    }
    console.log(viewContent);
    const boardList = viewContent.map((data) => 
        <li 
        className='post flex-column' 
        key={data.id} 
        ref={e => postRef.current[data.id] = e}
        onClick={() => onClickHandler(data.id)}
        >
            <div className="flex-row">
                <div className='flex-column'>
                    <div className='post-title'>{data.title}</div>
                    <div className='post-writer'>작성자: {data.writer}</div>
                </div>
            </div>
            <div className="post-content post-hide">
                내용입니다. {data.id}
                <div className='flex-row'>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
        </li>
    );
    return (
        <div className='board flex-column'>
            <ul className='scroll-y'>
                {boardList}
            </ul>
        </div>
    );
}

export default App;