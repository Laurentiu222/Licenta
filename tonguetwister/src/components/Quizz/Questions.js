import React, { useState } from "react";
import "./Questions.css";

export default function Questions() {
  const [showLevel, setShowLevel] = useState(true);
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(null); // New state variable for selected difficulty level

  // Define question sets for each difficulty level
  const questionSets = {
    Beginner: [
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
    ],
    Intermediate: [
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
    ],
    Advanced: [
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
    ],
  };

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questionSets[selectedLevel].length) {
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

  const handleLevelSelection = (level) => {
    setSelectedLevel(level);
    setShowLevel(false);
  };

  return (
    <div>
      {showLevel ? (
        <div className="question-level">
          <h1>Choose Your English Quiz Level</h1>
          <button className="btn-level" onClick={() => handleLevelSelection("Beginner")}>
            Beginner
          </button>
          <button className="btn-level" onClick={() => handleLevelSelection("Intermediate")}>
            Intermediate
          </button>
          <button className="btn-level" onClick={() => handleLevelSelection("Advanced")}>
            Advanced
          </button>
        </div>
      ) : (
        <div className="question-container">
          <div className="question-card">
            <div>
              <h1>English Quiz</h1>
            </div>
            {showFinalResults ? (
              <div className="final-results">
                <h1>Final Results</h1>
                <h2>
                  {score} out of {questionSets[selectedLevel].length} correct
                </h2>
                <button className="restart" onClick={restartGame}>
                  Restart Quiz
                </button>
                
              </div>
            ) : (
              <div className="question">
                <h2>
                  Question {currentQuestion + 1} out of {questionSets[selectedLevel].length}
                </h2>
                <h3 className="question-text">{questionSets[selectedLevel][currentQuestion].text}</h3>
                <ul className="quizz-list">
                  {questionSets[selectedLevel][currentQuestion].options.map((option) => (
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
      )}
    </div>
  );
}