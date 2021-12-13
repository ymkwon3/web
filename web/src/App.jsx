import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './css/App.css';

import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Board from './components/Board';
// intro page

function App() {

  const [isMenuActive, setActive] = useState("true");
  const menuRef = useRef();
  const handleToggle = () => {
    setActive(!isMenuActive);
    menuRef.current.style.width = isMenuActive ? "10rem" : "0";
    console.log(menuRef.current.style)
  };

  return (
    <>
      <div className="App">
        <div className="menu-button" onClick={handleToggle}>
          <div className={`menu-bar1 ${isMenuActive ? "" : "menu-change"}`}></div>
          <div className={`menu-bar2 ${isMenuActive ? "" : "menu-change"}`}></div>
          <div className={`menu-bar3 ${isMenuActive ? "" : "menu-change"}`}></div>
        </div>
        <div className="menu" ref={menuRef}>
          <div>메뉴1</div>
          <div>메뉴2</div>
          <div>메뉴3</div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/board" element={<Board/>}/>
          </Routes>
        </BrowserRouter>
          <div className="App-footer">
            <Footer />
          </div>
      </div>
    </>
  );
}

export default App;
