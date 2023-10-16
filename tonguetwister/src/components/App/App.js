import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quizz from '../pages/Quizz';
import './App.css';
import Levels from '../Levels/Levels';
import Questions from '../Quizz/Questions';
import Intermidate from '../Quizz/Intermidate';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Quizz" element={<Quizz />} />
          <Route path="/" element={<Levels />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/intermediate" element={<Intermidate />} />
          <Route path="/levels" element={<Levels />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
