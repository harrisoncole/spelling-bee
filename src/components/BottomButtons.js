import React from 'react';
import { EnterButton } from './index';
import './BottomButtons.css';

const BottomButtons = ({ checkWord }) => {
  return (
    <div className="bottom-buttons">
      <EnterButton checkWord={checkWord} />
      <div className="btn">Btn</div>
      <div className="btn side">Btn</div>
    </div>
  );
};

export default BottomButtons;
