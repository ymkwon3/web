import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import '../css/App.css';

import Project from './Project';

// intor page

function App() {
  const [header, setHeader] = useState();
  const [cursor, setCursor] = useState();

  const slideRef = useRef([]);
  let slideIdx = 0;

  useEffect(() => {
    const url = "http://175.215.49.230:3001/board";
      axios.get(url).then(function(res){
          console.log(res);
      })
      .catch(function(err){
          console.log("err: " + err);
      });

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
    if (window.scrollY > window.innerHeight / 2 && slideRef.current[slideIdx].className.length < 32) {
      slideRef.current[slideIdx++].className += " animated slide-in-left waypoint";
      slideRef.current[slideIdx++].className += " animated slide-in-left waypoint";
      slideRef.current[slideIdx].className += " animated slide-in-right waypoint";
    }
  }

  return (
    <>
        <div className="App-header">
            <div>
                {header}{cursor}
            </div>
        </div>
        <div className="App-aboutMe flex-row">
            <div className="subTitle" ref={(e) => slideRef.current[0] = e} style={{ opacity: 0 }}>
                소개
            </div>
            <div className="column-line" ref={(e) => slideRef.current[1] = e} />
            <div className="content flex-column" ref={(e) => slideRef.current[2] = e} style={{ opacity: 0 }}>
                좋은 개발자를 꿈꾸며 배우고 있는 권영민입니다.
                <br />
                좋은 기회로 외주를 경험하였고, 이를 통해 개발에 대한 흥미와
                <br />
                문제 해결에 대한 흥미를 느껴 좋은 개발자라는 꿈을 가지게 되었습니다.
                <br />
                <br />
                "1일 1커밋"이라는 목표를 설정해
                <br />
                알고리즘 문제 해결, 개발을 통해 꾸준히 달성하고 있습니다.
            </div>
        </div>
        <div className="App-project flex-column">
            <Project />
        </div>
    </>
  );
}

export default App;
