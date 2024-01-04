// Learn.js
import React, { useState, useEffect } from 'react';
import './Learn.css';

export default function Learn() {
  const [introText, setIntroText] = useState('');
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch introduction text from the backend
    fetch('http://localhost:8081/api/intro')
      .then((response) => response.json())
      .then((data) => setIntroText(data.text))
      .catch((error) => console.error('Error fetching introduction:', error));

    // Fetch quizzes from the backend
    fetch('http://localhost:8081/api/quizzes')
      .then((response) => response.json())
      .then((data) => setQuizzes(data))
      .catch((error) => console.error('Error fetching quizzes:', error));
  }, []);

  return (
    <div className="container">
      <h1>Welcome to English Learning Journey!</h1>
      {/* Display the fetched introduction text */}
      <p>{introText}</p>

      <h2>What You Will Learn</h2>
      <p>
        In this course, you will explore a range of tenses, allowing you to express
        yourself accurately and confidently in different situations. From the simplicity
        of the present simple to the nuances of the past perfect continuous, we cover it all.
      </p>

      <h3>Key Tenses Covered:</h3>
      <ul>
        <li>Present Simple</li>
        <li>Present Continuous</li>
        <li>Present Perfect</li>
        <li>Present Perfect Continuous</li>
        <li>Past Simple</li>
        <li>Past Continuous</li>
        <li>Past Perfect</li>
        <li>Past Perfect Continuous</li>
      </ul>

      <h2>How the Course Works</h2>
      <p>
        Each tense will be presented in a clear and concise manner, accompanied by
        examples, exercises, and quizzes to reinforce your understanding. Our interactive
        approach ensures that you not only grasp the rules but also apply them in real-life
        scenarios.
      </p>

      <h2>Get Ready to Dive In!</h2>
      <p>
        Start your English learning journey today. Whether you're aiming to improve your
        conversational skills, enhance your writing, or prepare for language exams, this
        course will provide you with the knowledge and practice you need.
      </p>

      <h2>Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.quiz_id}>{quiz.quiz_name}</li>
        ))}
      </ul>
    </div>
  );
}
