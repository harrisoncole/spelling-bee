import React from 'react';
import { EnterButton, DeleteButton, SwapLettersButton } from './index';
import './BottomButtons.css';

const BottomButtons = ({ checkWord, clearWord, displayInstructions }) => {
  return (
    <div className="bottom-buttons">
      <EnterButton checkWord={checkWord} />
      <SwapLettersButton />
      <DeleteButton clearWord={clearWord} />
    </div>
  );
};

export default BottomButtons;
