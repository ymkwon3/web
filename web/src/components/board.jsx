import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import '../css/App.css';
import '../css/Board.css';

function App(props) {
    const [viewContent, setViewContent] = useState([]);
    const postRef = useRef([]);
    const url = "http://175.215.49.230:3001/";
    const apiGet = "board";
    const apiDelete = "delete";
    
    useEffect(() => {
        async function getData() {
            await axios.get(url + apiGet).then(function(res){
                setViewContent(res.data);
            })
            .catch(function(err){
                console.log("err: " + err);
            });
        }
        getData();
    }, []);

    // 게시물 클릭 시, 숨겨진 내용을 보여줍니다.
    const onClickHandler = (e) => {
        console.log("data : " + e);
        postRef.current[e].childNodes[1].className = postRef.current[e].childNodes[1].className === "post-content" ? "post-content post-hide" : "post-content";
        console.log(postRef.current[e].childNodes[1].className)
    }

    // 게시물을 삭제합니다.
    const onClickDelete = (e) => {
        async function deletePost() {
            await axios.delete(url + apiDelete + "/" + e).then(function(res){
                console.log("게시물이 삭제되었습니다. id : " + e);
            })
            .catch(function(err){
                console.log("err: " + err);
            });
        }
        deletePost();
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
                    <button onClick={() => onClickDelete(data.id)}>삭제</button>
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