import React from 'react';
import { EnterButton, DeleteButton, SwapLettersButton } from './index';
import './BottomButtons.css';

const BottomButtons = ({ checkWord, removeLetter }) => {
  return (
    <div className="bottom-buttons">
      <EnterButton checkWord={checkWord} />
      <SwapLettersButton />
      <DeleteButton removeLetter={removeLetter} />
    </div>
  );
};

export default BottomButtons;
