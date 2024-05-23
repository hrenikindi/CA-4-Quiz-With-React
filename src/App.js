import React, { useState, useEffect } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);

  useEffect(() => {
    if (answerStatus !== null) {
      if (answerStatus) {
        setUserScore((prevScore) => prevScore + 1);
      }

      const nextIndex = questionIndex + 1;
      if (nextIndex < questions.length) {
        setQuestionIndex(nextIndex);
        setHighlighted(false);
      } else {
        setQuizFinished(true);
      }

      setAnswerStatus(null);
    }
  }, [answerStatus, questionIndex]);

  const handleAnswerSelection = (correct) => {
    setAnswerStatus(correct);
  };

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const handleHighlightToggle = (value) => {
    setHighlighted(value);
  };

  const content = quizFinished ? (
    <Result score={userScore} total={questions.length} />
  ) : (
    <QuestionBox
      question={questions[questionIndex]}
      currentQuestionIndex={questionIndex}
      totalQuestions={questions.length}
      onAnswer={handleAnswerSelection}
      highlight={highlighted}
      toggleHighlight={handleHighlightToggle}
    />
  );

  return (
    <>
      {!quizFinished && (
        <header className="header">
          <h1 className="title">Kalvium</h1>
          <button className="theme-toggle-button" onClick={toggleTheme}>
            Switch to {darkTheme ? "Light" : "Dark"} Mode
          </button>
        </header>
      )}
      <div className={`app-wrapper ${darkTheme ? "dark-theme" : ""}`}>
        {content}
      </div>
    </>
  );
}

export default App;
