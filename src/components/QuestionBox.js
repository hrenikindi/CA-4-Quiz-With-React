import React from "react";

function QuestionBox({
  question,
  currentQuestionIndex,
  totalQuestions,
  onAnswer,
  highlight,
  toggleHighlight,
}) {
  const handleHighlight = (value) => {
    toggleHighlight(value);
  };
  const optionsButtons = [];
  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
    optionsButtons.push(
      <button key={option.id} onClick={() => onAnswer(option.isCorrect)}>
        {option.text}
      </button>,
    );
  }

  return (
    <div>
      <h2>
        Question: {currentQuestionIndex + 1} out of {totalQuestions}
      </h2>
      <h3 className={`question-text ${highlight ? "highlighted" : ""}`}>
        {question.text}
      </h3>
      <div className="question-options">{optionsButtons}</div>
      <div>
        <button
          className="highlight-button"
          onClick={() => handleHighlight(true)}
        >
          Highlight
        </button>
        <button
          className="remove-highlight-button"
          onClick={() => handleHighlight(false)}
        >
          Remove Highlight
        </button>
      </div>
    </div>
  );
}

export default QuestionBox;
