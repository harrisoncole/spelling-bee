import React, { useState } from 'react';
import './HiveCell.css';

const HiveCell = ({ cellLocation, letter, setCurrentWord, currentWord }) => {
  let [clicked, setClicked] = useState(false);

  return (
    <svg
      onMouseDown={evt => clickHandler(setClicked, true, evt)}
      onMouseUp={evt => clickHandler(setClicked, false, evt)}
      onMouseLeave={evt => clickHandler(setClicked, false, evt)}
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
  console.log('in event: ', evt.type);
  setter(bool);
}
