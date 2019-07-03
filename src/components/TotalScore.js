import React from 'react';
import './TotalScore.css';

const TotalScore = ({ score }) => {
  return (
    <div className="score">
      <div className="score-amount">{score}</div>
    </div>
  );
};

export default TotalScore;
