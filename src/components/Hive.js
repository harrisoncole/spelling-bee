import React from 'react';
import { HiveCell } from './index';
import './Hive.css';

const Hive = ({ letters }) => {
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
    <div className="hive">
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
