import React from "react";
import "../App/App.css";
import { Hero } from "../Hero/Hero";
import Card from "../Card/Card";

export default function Home() {

  return (
    <>
      <div>
        <Hero />
        <Card />
      </div>
    </>
  )
}