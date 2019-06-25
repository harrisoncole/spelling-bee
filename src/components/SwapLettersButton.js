import React from 'react';

const SwapLettersButton = ({ shuffleLetters, swapPressed }) => {
  return (
    <div
      className={swapPressed ? 'btn side pressed' : 'btn side'}
      onClick={shuffleLetters}
    >
      Swap!
    </div>
  );
};

export default SwapLettersButton;
