import React, { useEffect } from 'react';
import { EnterButton, DeleteButton, SwapLettersButton } from './index';
import './BottomButtons.css';

const BottomButtons = ({ checkWord, removeLetter, shuffleLetters }) => {
  useEffect(() => {
    function keyDownHandler(evt) {
      if (evt.key === 'Backspace') {
        removeLetter();
      } else if (evt.key === 'Enter') {
        checkWord();
      } else if (evt.keyCode === 32) {
        shuffleLetters();
      }
    }
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });
  return (
    <div className="bottom-buttons">
      <EnterButton checkWord={checkWord} />
      <SwapLettersButton shuffleLetters={shuffleLetters} />
      <DeleteButton removeLetter={removeLetter} />
    </div>
  );
};

export default BottomButtons;
