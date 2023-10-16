import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Questions.css";

export default function Intermidate() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Define questions as a flat array of objects
  const questions = [
    {
      text: "Yesterday, he _____ (play) basketball with his friends.",
      options: [
        { id: 0, text: "played", isCorrect: true },
        { id: 1, text: "plays", isCorrect: false },
        { id: 2, text: "is playing", isCorrect: false },
        { id: 3, text: "playing", isCorrect: false },
      ],
    },
    {
      text: "While I _____ (work) on my computer, the phone rang.",
      options: [
        { id: 0, text: "was working", isCorrect: true },
        { id: 1, text: "worked", isCorrect: false },
        { id: 2, text: "working", isCorrect: false },
        { id: 3, text: "works", isCorrect: false },
      ],
    },
    {
      text: "She _____ (read) a book when I called her.",
      options: [
        { id: 0, text: "read", isCorrect: false },
        { id: 1, text: "was reading", isCorrect: true },
        { id: 2, text: "reads", isCorrect: false },
        { id: 3, text: "reading", isCorrect: false },
      ],
    },
    {
      text: "Last week, they _____ (travel) to France.",
      options: [
        { id: 0, text: "travel", isCorrect: false },
        { id: 1, text: "travels", isCorrect: false },
        { id: 2, text: "traveled", isCorrect: true },
        { id: 3, text: "traveling", isCorrect: false },
      ],
    },
    {
      text: "He _____ (watch) TV when the power went out.",
      options: [
        { id: 0, text: "watched", isCorrect: false },
        { id: 1, text: "watches", isCorrect: false },
        { id: 2, text: "was watching", isCorrect: true },
        { id: 3, text: "watching", isCorrect: false },
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
              <Link to="./Levels">Levels</Link>
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
