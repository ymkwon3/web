import React, { useRef, useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './css/App.css';

import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Board from './components/Board';
// intro page

// todo : dark mode, light mode

function App() {
  const naviRef = useRef();
  const [menuActive, setMenuActive] = useState(false);
  const menuClick = () => {
    setMenuActive(!menuActive);
    naviRef.current.style.height = menuActive ? "7.5vh" : "0";
  };
  return (
    <>
      <div className="App">
        <div className='menu-bar-container' onClick={menuClick}>
          <div className={menuActive ? "menu-change menu-bar1" : "menu-bar1"}></div>
          <div className={menuActive ? "menu-change menu-bar2" : "menu-bar2"}></div>
          <div className={menuActive ? "menu-change menu-bar3" : "menu-bar3"}></div>
        </div>
        
        <HashRouter>
          <div className="navi flex-row" ref={naviRef}>
            <Link to="/">Home</Link>
            <Link to="/board">Board</Link>
          </div>
          <Routes>
            <Route path="/" element={<MainPage path="MainPage"/>}/>
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
