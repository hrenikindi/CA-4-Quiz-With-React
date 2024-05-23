import React from "react";

function Result({ score, total }) {
  const percentage = Math.round((score / total) * 100);

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="final-result">
      <h2>Final Results</h2>
      <p>
        {score} out of {total} correct - ({percentage}%)
      </p>
      <button className="highlight-button" onClick={handleRestart}>
        Restart game
      </button>
    </div>
  );
}

export default Result;
