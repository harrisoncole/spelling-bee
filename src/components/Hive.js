import React from 'react';
import { HiveCell } from './index';
import './Hive.css';

const Hive = () => {
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
      {cellArray.map(cell => cell && <HiveCell cellLocation={cell} />)}
    </div>
  );
};

export default Hive;
