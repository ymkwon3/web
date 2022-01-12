import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/App.css';
import '../css/Board.css';

import * as API from './Api.jsx';

function App(props) {
    const [viewContent, setViewContent] = useState([]);
    const [viewContentChange, setViewContentChange] = useState(0);
    const postRef = useRef([]);
    const url = "https://175.215.49.230:3001/";
    const apiGet = "board";
    const apiDelete = "postDelete";
    const apiInsert = "postInsert";

    //todo: api 파일 따로 정리하기, 삭제시 비밀번호 입력
    useEffect(() => {
        async function getPost() {
            let res = await API.getPost();
            setViewContent(res[0]);
            setViewContentChange(res[1]);
        }
        getPost();
    }, [viewContentChange]);

    // 게시물 클릭 시, 숨겨진 내용을 보여줍니다.
    const onClickHandler = (e) => {
        console.log("data : " + e);
        postRef.current[e].childNodes[1].className = postRef.current[e].childNodes[1].className === "post-content" ? "post-content post-hide" : "post-content";
        console.log(postRef.current[e].childNodes[1].className)
    }

    // 게시물을 삭제합니다.
    const onClickDelete = (e) => {
        async function deletePost() {
            await axios.delete(url + apiDelete + "/" + e).then(function (res) {
                // todo: 게시물 비밀번호 확인
                alert("게시물이 삭제되었습니다.");
                console.log("게시물이 삭제되었습니다. id : " + e);
                setViewContentChange(-1);
            })
                .catch(function (err) {
                    console.log("err: " + err);
                });
        }
        deletePost();
    }
    let boardList;
    // 서버가 열리지 않을 경우
    if (viewContent.length === 0) {
        boardList = <div className='black-14pt'>Please check the server status...</div>;
    }
    // 정상 작동
    else {
        boardList = viewContent.map((data) =>
            <li
                className='post flex-column'
                key={data.id}
                ref={e => postRef.current[data.id] = e}
                onClick={() => onClickHandler(data.id)}
            >
                <div className="flex-row">
                    <div className='flex-column'>
                        <div className='post-title'>{data.title}</div>
                        <div className='post-writer'>작성자 : {data.writer}</div>
                    </div>
                </div>
                <div className="post-content post-hide">
                    <div className="post-date">
                        작성일 : {data.date}
                    </div>
                    {data.content}
                    <div className='flex-row'>
                        <button>수정</button>
                        <button onClick={() => onClickDelete(data.id)}>삭제</button>
                    </div>
                </div>
            </li>
        );
    }

    const onClickInsert = () => {
        // async function inputPost() {
        //     let result = await API.inputPost();
        //     if(result){
        //         setViewContentChange(-1);
        //     }
        // }
        // inputPost();
    }

    return (
        <div className='box-shadow-inset board flex-column'>
            <ul className='scroll-y'>
                {boardList}
            </ul>
            
            <Link to="/postWrite">
                <img className="insert-btn" src="images/post.svg" alt="postImage"/>
            </Link>
            
        </div>
    );
}

export default App;

// 게시물 참고 : https://falaner.tistory.com/59