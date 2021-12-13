import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function App(props) {
    const location = useLocation();

    useEffect(() => {
        const url = "http://localhost:3001/board";
        axios.get(url).then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log("err: " + err);
        });
    }, []);
    console.log(location);
    return (
        <div>
            hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
        </div>
    );
}

export default App;