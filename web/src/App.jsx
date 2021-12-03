import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './css/App.css';

import Project from './components/Project';
import Footer from './components/Footer';

// intor page

function App() {
  const textRef = useRef();
  const [header, setHeader] = useState();
  const [cursor, setCursor] = useState();

  const slideRef = useRef([]);
  let slideIdx = 0;

  useEffect(() => {
    const content = ["권영민의 포트폴리오입니다.", "방문해주셔서 감사합니다.", "꾸준한 업데이트 예정입니다."];
    let text = "";
    let cursor = "_";
    let idx = 0;
    let lineIdx = 0;
    let textState = true;
    let cursorInterval = setInterval(() => {
      if (cursor === "_") {
        setCursor(cursor);
        cursor = '';
      } else {
        setCursor(cursor);
        cursor = '_'
      }
    }, 500);
    let interval = setInterval(() => {
      if (textState) {
        text += content[lineIdx][idx];
        setHeader(text);
        idx++;
      } else {
        text = text.slice(0, -1);
        setHeader(text);
        if (text.length === 0) {
          textState = true;
        }
      }

      if (lineIdx === content.length) {
        textState = false;
        lineIdx = 0;
        idx = 0;
      }
      else if (idx === content[lineIdx].length) {
        textState = false;
        lineIdx++;
        idx = 0;
      }
    }, 150);
  }, []);

  onscroll = (e) => {
    console.log(window.scrollY);
    console.log(slideIdx);
    if (window.scrollY > window.innerHeight / 2 && slideRef.current[slideIdx].className.length < 32) {
      slideRef.current[slideIdx++].className += " animated slide-in-left waypoint";
      slideRef.current[slideIdx].className += " animated slide-in-left waypoint";
    }
  }

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
            <div className="subTitle" ref={(e) => slideRef.current[0] = e}>
              소개
            </div>
            <div className="line" ref={(e) => slideRef.current[1] = e} />
            <div className="content flex-column">
              좋은 개발자를 꿈꾸며 배우고 싶은 권영민입니다.
              <br />
              좋은 기회로 외주를 경험하였고, 이를 통해 개발에 대한 흥미와
              <br />
              문제 해결에 대한 흥미를 느껴 좋은 개발자라는 꿈을 가지게 되었습니다.
            </div>
          </div>
          <div className="App-project flex-column">
            <Project />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
