import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Questions.css";

export default function Advenced() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Define questions as a flat array of objects
  const questions = [
    {
      text: "By the time I got home, she _____ (cook) dinner.",
      options: [
        { id: 0, text: "cooked", isCorrect: true },
        { id: 1, text: "cooks", isCorrect: false },
        { id: 2, text: "was cooking", isCorrect: false },
        { id: 3, text: "cooking", isCorrect: false },
      ],
    },
    {
      text: "When I arrived at the party, they _____ (dance) for hours.",
      options: [
        { id: 0, text: "dance", isCorrect: false },
        { id: 1, text: "danced", isCorrect: false },
        { id: 2, text: "had been dancing", isCorrect: true },
        { id: 3, text: "dancing", isCorrect: false },
      ],
    },
    {
      text: "I had already eaten dinner by the time she _____ (arrive).",
      options: [
        { id: 0, text: "arrive", isCorrect: false },
        { id: 1, text: "arrives", isCorrect: false },
        { id: 2, text: "arrived", isCorrect: true },
        { id: 3, text: "arriving", isCorrect: false },
      ],
    },
    {
      text: "They _____ (work) at the company for five years before they got promoted.",
      options: [
        { id: 0, text: "worked", isCorrect: false },
        { id: 1, text: "works", isCorrect: false },
        { id: 2, text: "had been working", isCorrect: true },
        { id: 3, text: "working", isCorrect: false },
      ],
    },
    {
      text: "When he left for the trip, he _____ (pack) for days.",
      options: [
        { id: 0, text: "packs", isCorrect: false },
        { id: 1, text: "packed", isCorrect: false },
        { id: 2, text: "had packed", isCorrect: true },
        { id: 3, text: "packing", isCorrect: false },
      ],
    },
  ]

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    <div className="question-container">
      <div className="question-card">
        <div>
          <h1>English Quiz</h1>
        </div>
        {showFinalResults ? (
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct
            </h2>
            <button className="restart" onClick={restartGame}>
              Restart Quiz
            </button>
            <button className="restart">
              <Link to="/levels">Levels</Link>
            </button>
          </div>
        ) : (
          <div className="question">
            <h2>
              Question {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>
            <ul className="quizz-list">
              {questions[currentQuestion].options.map((option) => (
                <li
                  className="quizz-item"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="question-footer">
          {showFinalResults ? (
            <div></div>
          ) : (
            <h2>Current score: {score}</h2>
          )}
        </div>
      </div>
    </div>
  );
}
