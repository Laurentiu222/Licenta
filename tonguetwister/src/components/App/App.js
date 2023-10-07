import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />        
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
        </Routes> 
      </Router>
    </>
  );
}

export default App;
