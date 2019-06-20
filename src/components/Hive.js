import React, { useEffect } from 'react';
import { HiveCell } from './index';
import './Hive.css';
import '../App.css';

const Hive = ({
  gameLetters,
  displayInstructions,
  addLetter,
  removeLetter,
}) => {
  const cellArray = [
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right',
    'center',
  ];

  useEffect(() => {
    function keyDownHandler(evt) {
      console.log(evt);
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      if (letters.includes(evt.key.toLowerCase())) {
        addLetter(evt.key.toLowerCase());
      } else if (evt.key === 'Backspace') {
        removeLetter();
      }
    }
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [addLetter, removeLetter]);

  return (
    <div className={displayInstructions ? 'dim hive' : 'hive'}>
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
