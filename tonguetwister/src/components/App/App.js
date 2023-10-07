import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from '../Hero/Hero';
import { Home } from '../pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes> 
      </Router>
    </>
  );
}

export default App;
