import React from "react";
import "../App/App.css";
import Learn from "../Learn/Learn";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <>
      <div>
      <Link to="/Learn"></Link>
      </div>
    </>
  )
}