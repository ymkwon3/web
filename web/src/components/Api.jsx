import axios from 'axios';

const url = "https://175.215.49.230:3001/";
// const url = "https://localhost:3001/"
const post_get = "board";
const post_delete = "postDelete";
const post_insert = "postInsert";

// 전체 게시물 불러오기
export async function getPost(){
    let result;
    await axios.get(url + post_get)
    .then((res) => { 
        result = [res.data, 1];
    })
    .catch((err) => {
        result = [err, 0]; 
    });
    return result;
}

// 게시물 입력
export async function inputPost(param){
    const testData = {
        title : "testTitle",
        content : "testContent",
        writer : "작성자",
        password : "test",
    }

    let result;

    await axios.post(url + post_insert, testData)
    .then((res) => { 
        console.log("게시물 입력 완료");
        result = true;
    })
    .catch((err) => {
        console.log("게시물 입력 실패");
        result = false;
    });
    return result;
}