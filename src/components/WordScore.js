import React from 'react';
import './WordScore.css';

const WordScore = ({ score, showWordScore }) => {
  return (
    <div className={showWordScore ? 'word-score' : 'no-score'}>
      {' '}
      <span>+{score}!</span>
    </div>
  );
};

export default WordScore;
