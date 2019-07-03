import React from 'react';
import './TotalScore.css';

const TotalScore = ({ score }) => {
  return <span className="score">{score}</span>;
};

export default TotalScore;
