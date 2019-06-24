import React from 'react';

const SwapLettersButton = ({ shuffleLetters }) => {
  return (
    <div className="btn side" onClick={shuffleLetters}>
      Swap!
    </div>
  );
};

export default SwapLettersButton;
