import React from 'react';
import { TotalScore } from './index';
import './ScoreBar.css';

const ScoreBar = ({ score }) => {
  return (
    <div className="score-bar">
      <TotalScore score={score} />
    </div>
  );
};

export default ScoreBar;
