import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../pages/Home';
import Quizz from '../pages/Quizz';
import Levels from '../Levels/Levels';
import Questions from '../Quizz/Questions';
import Intermidate from '../Quizz/Intermidate';
import Advenced from '../Quizz/Advenced';
import Learn from '../Learn/Learn';
import Signup from '../Users/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Quizz" element={<Quizz />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Levels" element={<Levels />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/Intermediate" element={<Intermidate />} />
          <Route path="/Advance" element={<Advenced />} />       
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
