// Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default function Signup(){
  return (
    <div>
      <h2>Choose an option:</h2>
      <ul>
        <li>
          <Login />
        </li>
        <li>
        <Register />
        </li>
      </ul>
    </div>
  );
};


