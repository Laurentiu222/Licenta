// Signup.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Signup.css';

export default function Signup() {
  const [login, setLogin] = useState(false);
  const [showOne, setOne] = useState(true);

  const handleOneShow = () => {
    setOne(false);
  };

  const handleLoginButtonClick = () => {
    setLogin(true);
    handleOneShow(false);
  };

  return (
    <div>
      <h2>Create an account to get started:</h2>
      <div className='container'>
        {showOne ? (
          <div className='registration'>
            <Register handleLoginButtonClick={handleLoginButtonClick} />
          </div>
        ) : null}

        {login ? (
          <Login />
        ) : null}
      </div>
    </div>
  );
}
