import React, { useEffect } from 'react';
import './TotalScore.css';

const effectFn = effectGenerator();

const TotalScore = ({ score, rank }) => {
  useEffect(() => {
    effectFn(rank);
  }, [rank]);
  return (
    <div className="score">
      <div className="score-amount">{score}</div>
    </div>
  );
};

export default TotalScore;

function effectGenerator() {
  let counter = 0;
  return function(rank) {
    if (rank && rank !== 'Beginner') {
      let score = document.querySelector('.score');
      let dotArray = document.getElementsByClassName('dot');
      let prevDot = dotArray[counter++];
      prevDot.style.backgroundColor = '#f8cd05';
      let nextDot = dotArray[counter];
      score.style.left = nextDot.offsetLeft - 5 + 'px';
    }
  };
}
