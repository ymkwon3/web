import axios from 'axios';

const url = "https://175.215.49.230:3001/";
const get_post = "board";
const apiDelete = "postDelete";
const apiInsert = "postInsert";


export async function getPost(){
    let result;
    await axios.get(url + get_post)
    .then((res) => { 
        result = [res.data, 1];
    })
    .catch((err) => {
        result = [err, 0]; 
    });
    return result;
}