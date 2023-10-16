import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Questions.css";

export default function Questions() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Define questions as a flat array of objects
  const questions = [
    {
      text: "The dog is ________ now.",
      options: [
        { id: 0, text: "running", isCorrect: true },
        { id: 1, text: "swim", isCorrect: false },
        { id: 2, text: "ate", isCorrect: false },
        { id: 3, text: "jumps", isCorrect: false },
      ],
    },
    {
      text: "She _____ English every day.",
      options: [
        { id: 0, text: "speak", isCorrect: false },
        { id: 1, text: "spoke", isCorrect: false },
        { id: 2, text: "speaks", isCorrect: true },
        { id: 3, text: "speaking", isCorrect: false },
      ],
      },
      {
        text: "I _____ my homework yesterday.",
        options: [
          { id: 0, text: "do", isCorrect: false },
          { id: 1, text: "done", isCorrect: false },
          { id: 2, text: "did", isCorrect: true },
          { id: 3, text: "does", isCorrect: false },
        ],
      },
      {
        text: "They _____ to the park on weekends.",
        options: [
          { id: 0, text: "going", isCorrect: false },
          { id: 1, text: "gone", isCorrect: false },
          { id: 2, text: "go", isCorrect: true },
          { id: 3, text: "goes", isCorrect: false },
        ],
      },
      {
        text: "We _____ for the bus now.",
        options: [
          { id: 0, text: "waiting", isCorrect: true },
          { id: 1, text: "waited", isCorrect: false },
          { id: 2, text: "waits", isCorrect: false },
          { id: 3, text: "wait", isCorrect: false },
        ],
      },
      {
        text: "She _____ to the movies last night.",
        options: [
          { id: 0, text: "goes", isCorrect: false },
          { id: 1, text: "went", isCorrect: true },
          { id: 2, text: "going", isCorrect: false },
          { id: 3, text: "gone", isCorrect: false },
        ],
      },
      {
        text: "I _____ you tomorrow.",
        options: [
          { id: 0, text: "calling", isCorrect: false },
          { id: 1, text: "call", isCorrect: true },
          { id: 2, text: "calls", isCorrect: false },
          { id: 3, text: "called", isCorrect: false },
        ],
      },
      {
        text: "They _____ their lunch right now.",
        options: [
          { id: 0, text: "eat", isCorrect: false },
          { id: 1, text: "ate", isCorrect: false },
          { id: 2, text: "eating", isCorrect: true },
          { id: 3, text: "eats", isCorrect: false },
        ],
      },
      {
        text: "He _____ to the concert last night.",
        options: [
          { id: 0, text: "going", isCorrect: false },
          { id: 1, text: "go", isCorrect: false },
          { id: 2, text: "went", isCorrect: true },
          { id: 3, text: "goes", isCorrect: false },
        ],
      },
      {
        text: "I _____ the book right now.",
        options: [
          { id: 0, text: "reads", isCorrect: false },
          { id: 1, text: "reading", isCorrect: true },
          { id: 2, text: "read", isCorrect: false },
          { id: 3, text: "readed", isCorrect: false },
        ],
      },
  ];

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
              <Link to="/Levels">Levels</Link>
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
