import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import './Navbar.css';

function Navbar(){
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className="navbar-logo">
            Toung Twister <i class="fas fa-book"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className="nav-item">
              <Link to='/Home' className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/Learn' className="nav-links" onClick={closeMobileMenu}>
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/Quizz' className="nav-links" onClick={closeMobileMenu}>
                Quizz
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/Dictinary' className="nav-links" onClick={closeMobileMenu}>
                Dictinary
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign-up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </>
  )
}


export default Navbar;