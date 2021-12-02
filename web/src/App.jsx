import React, {useRef, useEffect, useState} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './css/App.css';
import Project from './components/Project';

// intor page

function App() {
  const textRef = useRef();
  const [header, setHeader] = useState();
  const [cursor, setCursor] = useState();
  useEffect(()=>{
    const content1 = "권영민의 포트폴리오입니다.";
    const content2 = "\n방문해주셔서 감사합니다."
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
          text += content1[index++]
          setHeader(text);
          if(index === content1.length){
            clearInterval(interval);
            index = 0;

            interval = setInterval(() => {
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
                  text += content2[index++]
                  setHeader(text);
                  if(index === content2.length){
                    clearInterval(interval);
                    interval = setInterval(() => {
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
          }
        }, 200);
      }
    }, 500);
  },[]);
  
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="App-header">
            <div ref={textRef}>
              {header}{cursor}
            </div>
          </div>
          <div className="App-aboutMe flex-row">
            <div className="subTitle">
              소개
            </div>
            <div className="line"/>
            <div className="content flex-column">
              좋은 개발자를 꿈꾸고 배우고 싶은 권영민입니다.
              <br/>
              좋은 기회 덕분에 외주를 경험하였고, 이를 통해 개발에 대한 흥미와 
              <br/>
              문제 해결에 대한 흥미를 느껴 좋은 개발자가 되기로 결심했습니다.
            </div>
          </div>
          <div className="App-project flex-column">
            <Project/>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
