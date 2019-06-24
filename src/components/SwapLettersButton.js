import React from 'react';

const SwapLettersButton = ({ swapLetters }) => {
  return (
    <div className="btn side" onClick={swapLetters}>
      Swap!
    </div>
  );
};

export default SwapLettersButton;
