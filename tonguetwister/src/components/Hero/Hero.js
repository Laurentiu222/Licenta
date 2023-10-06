import React from "react";
import './Hero.css';
import { Button } from "../Button/Button";

export function Hero(){


  return(
    <div className="hero-container">
      <video src="\video\production_id_4878177 (1080p).mp4" autoPlay loop muted/>
      <h1>Unlocking the World of English</h1>
      <div className="hero--btn">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Get Started </Button>
      </div>
    </div>
  )

}