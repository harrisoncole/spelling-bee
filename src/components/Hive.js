import React, { useEffect } from 'react';
import { HiveCell } from './index';
import './Hive.css';
import '../App.css';

const Hive = ({
  gameLetters,
  shuffleLetters,
  addLetter,
  removeLetter,
  checkWord,
  clearWord,
}) => {
  const cellArray = [
    'center',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right',
    'top',
  ];

  useEffect(() => {
    function keyDownHandler(evt) {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      if (letters.includes(evt.key.toLowerCase())) {
        addLetter(evt.key.toLowerCase());
      }
    }

    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });

  return (
    <div className="hive">
      {cellArray.map(
        (cell, idx) =>
          cell && (
            <HiveCell
              key={cell}
              cellLocation={cell}
              letter={gameLetters[idx]}
              addLetter={addLetter}
            />
          )
      )}
    </div>
  );
};

export default Hive;
