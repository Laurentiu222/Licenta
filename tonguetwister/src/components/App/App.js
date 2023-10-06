import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Hero } from '../Hero/Hero';
import { Home } from '../pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
         <Hero /> 
         {/* <Switch>
          <Route path='/' exact component={Home} />
        </Switch>  */}
      </Router>
    </>
  );
}

export default App;
