import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quizz from '../pages/Quizz';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />        
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Quizz" element={<Quizz />} />
        </Routes> 
      </Router>
    </>
  );
}

export default App;
