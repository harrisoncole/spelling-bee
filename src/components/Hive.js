import React from 'react';
import { HiveCell } from './index';
import './Hive.css';
import '../App.css';

const Hive = ({ letters, displayInstructions }) => {
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
            <HiveCell key={cell} cellLocation={cell} letter={letters[idx]} />
          )
      )}
    </div>
  );
};

export default Hive;
