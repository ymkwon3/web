import './App.css';
import React, {useRef, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
  const textRef = useRef();
  const [header, setHeader] = useState();
  const [cursor, setCursor] = useState();
  useEffect(()=>{
    const content = "권영민의 포트폴리오페이지 입니다.";
    let text = "";
    let cursor = "_";
    let index = 0;
    let interval = setInterval(() => {
      
      if(cursor === "_"){
        setCursor(cursor);
        cursor = '';
      } else{
        setCursor(cursor);
        cursor = '_'
      }
      index++;
      if(index === 5){
        setCursor('');
        clearInterval(interval);
        index = 0;
        interval = setInterval(() => {
          text += content[index++]
          setHeader(text);
          if(index === content.length){
            clearInterval(interval);
            setInterval(() => {
              if(cursor === "_"){
                setCursor(cursor);
                cursor = '';
              } else{
                setCursor(cursor);
                cursor = '_'
              }
            }, 500);
          }
        }, 200);
      }
    }, 500);
  },[]);
  
  return (
    <>
      <div className="App">
          <div className="App-header" ref={textRef}>
            {header}{cursor}
          </div>
      </div>
    </>
  );
}

export default App;
