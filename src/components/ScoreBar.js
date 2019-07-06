import React from 'react';
import { TotalScore } from './index';
import './ScoreBar.css';

const ScoreBar = ({ score, rank }) => {
  const levels = [
    'good-start',
    'moving-up',
    'good',
    'solid',
    'Nice',
    'Great',
    'Amazing',
    'Genius',
  ];
  return (
    <div className="score-bar">
      <TotalScore score={score} rank={rank} />
      <div className="progress-dots">
        {levels.map(level => (
          <div key={level} className={`${level} dot`} />
        ))}
      </div>
    </div>
  );
};

export default ScoreBar;
