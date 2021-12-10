import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './css/App.css';

import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Board from './components/Board';
// intro page

function App() {
  return (
    <>
      <div className="App">
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
