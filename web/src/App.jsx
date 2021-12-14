import React, { useRef, useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './css/App.css';

import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Board from './components/Board';
// intro page

function App() {
  const naviRef = useRef();
  onscroll = (e) => {
    if(window.scrollY > 100){
      console.log(window.scrollY + " " + window.innerHeight);
      naviRef.current.style.height = "5vh";
    } else {
      naviRef.current.style.height = "0";
    }
  }

  return (
    <>
      <div className="App">
        <HashRouter>
          <div className="navi flex-row" ref={naviRef}>
            <Link to="/">Home</Link>
            <Link to="/board">Board</Link>
          </div>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/board" element={<Board/>}/>
          </Routes>
        </HashRouter>
          <div className="App-footer">
            <Footer />
          </div>
      </div>
    </>
  );
}

export default App;
