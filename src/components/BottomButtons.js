import React, { useEffect, useState } from 'react';
import { EnterButton, DeleteButton, SwapLettersButton } from './index';
import './BottomButtons.css';

const BottomButtons = ({ checkWord, removeLetter, shuffleLetters }) => {
  const [enterPressed, setEnterPressed] = useState(false);
  const [swapPressed, setSwapPressed] = useState(false);
  const [deletePressed, setDeletePressed] = useState(false);

  useEffect(() => {
    function keyDownHandler(evt) {
      if (evt.key === 'Backspace') {
        removeLetter();
        setDeletePressed(true);
      } else if (evt.key === 'Enter') {
        checkWord();
        setEnterPressed(true);
      } else if (evt.keyCode === 32) {
        shuffleLetters();
        setSwapPressed(true);
      }
    }

    function keyUpHandler(evt) {
      if (evt.key === 'Backspace') {
        setDeletePressed(false);
      } else if (evt.key === 'Enter') {
        setEnterPressed(false);
      } else if (evt.keyCode === 32) {
        setSwapPressed(false);
      }
    }

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [removeLetter, checkWord, shuffleLetters]);

  const props = {
    enterPressed,
    swapPressed,
    deletePressed,
    checkWord,
    removeLetter,
    shuffleLetters,
  };
  return (
    <div className="bottom-buttons">
      <EnterButton {...props} />
      <SwapLettersButton {...props} />
      <DeleteButton {...props} />
    </div>
  );
};

export default BottomButtons;
