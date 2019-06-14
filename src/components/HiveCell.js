import React, { useState } from 'react';
import './HiveCell.css';

const HiveCell = ({ cellLocation, letter }) => {
  let [clicked, setClicked] = useState(false);
  document.addEventListener('mouseup', () => {
    setClicked(false);
  });

  document.addEventListener('keydown', evt => {
    if (evt.key === letter) {
      setClicked(true);
      setTimeout(() => setClicked(false), 100);
    }
  });

  return (
    <svg
      onMouseDown={evt => clickHandler(setClicked, clicked, evt)}
      viewBox="0 0 120 103.92304845413263"
      className={`${cellLocation} hive-cell`}
    >
      <polygon
        className={clicked && 'clicked'}
        points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
        stroke="white"
        strokeWidth="5"
      />
      <text className="letter" x="50%" y="50%" dy="10.75%">
        {letter}
      </text>
    </svg>
  );
};

export default HiveCell;

function clickHandler(setter, bool, evt) {
  console.log(evt);
  setter(!bool);
}
