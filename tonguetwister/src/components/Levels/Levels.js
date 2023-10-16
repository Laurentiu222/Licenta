import React from "react";
import { Link } from "react-router-dom";
import "./Levels.css";


export default function Levels() {
  return (
    <div className="question-level">
      <h1>Choose Your English Quiz Level</h1>
      <Link to="/Questions">
        <button className="btn-level">Beginner</button>
      </Link>
      <Link to="/Intermediate">
        <button className="btn-level">Intermediate</button>
      </Link>
      <Link to="/Advance">
        <button className="btn-level">Advance</button>
      </Link>
    </div>
  );
}
