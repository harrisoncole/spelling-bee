import React, { useEffect, useState } from 'react';
import { EnterButton, DeleteButton, SwapLettersButton } from './index';
import { moveElementVertically } from '../utils';
import './BottomButtons.css';

const BottomButtons = ({
  checkWord,
  removeLetter,
  shuffleLetters,
  setFeedback,
}) => {
  const [enterPressed, setEnterPressed] = useState(false);
  const [swapPressed, setSwapPressed] = useState(false);
  const [deletePressed, setDeletePressed] = useState(false);

  useEffect(() => {
    function keyDownHandler(evt) {
      if (evt.key === 'Backspace') {
        removeLetter();
        setDeletePressed(true);
      } else if (evt.key === 'Enter') {
        setFeedback(checkWord(), true);
        setEnterPressed(true);
        setTimeout(() => {
          setFeedback(null, false);
        }, 1000);
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
  }, [removeLetter, checkWord, shuffleLetters, setFeedback]);

  const props = {
    enterPressed,
    swapPressed,
    deletePressed,
    checkWord,
    removeLetter,
    shuffleLetters,
    setFeedback,
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
