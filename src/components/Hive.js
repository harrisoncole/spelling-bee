import React from 'react';
import { HiveCell } from './index';
import './Hive.css';
import '../App.css';

const Hive = ({ gameLetters, displayInstructions, addLetter }) => {
  const cellArray = [
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right',
    'center',
  ];
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
