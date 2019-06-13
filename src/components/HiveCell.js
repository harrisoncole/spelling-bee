import React from 'react';
import './HiveCell.css';

const HiveCell = ({ cellLocation }) => {
  return (
    <svg
      viewBox="0 0 120 103.92304845413263"
      className={cellLocation + ' hive-cell'}
    >
      <polygon
        points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
        stroke="white"
        stroke-width="7.5"
      />
    </svg>
  );
};

export default HiveCell;
