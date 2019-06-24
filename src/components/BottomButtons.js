import React from 'react';
import { EnterButton, DeleteButton } from './index';
import './BottomButtons.css';

const BottomButtons = ({ checkWord, clearWord }) => {
  return (
    <div className="bottom-buttons">
      <EnterButton checkWord={checkWord} />
      <div className="btn">Btn</div>
      <DeleteButton clearWord={clearWord} />
    </div>
  );
};

export default BottomButtons;
