import React from 'react';
import './App.css';
import Main from './pages/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/Hobbies/About'
import Work from './pages/Work/Work'
import Hobbies from './pages/About/About'


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/Hobbies" element={<Hobbies/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
