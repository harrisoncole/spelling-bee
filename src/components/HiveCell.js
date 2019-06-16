import React, { useState, useEffect } from 'react';
import './HiveCell.css';

const HiveCell = ({ cellLocation, letter, setCurrentWord, currentWord }) => {
  let [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log('use effect');
    document.addEventListener('keydown', evt =>
      keyHandler(setClicked, true, evt, letter)
    );
    document.addEventListener('keyup', evt =>
      keyHandler(setClicked, false, evt, letter)
    );

    return () => {
      document.removeEventListener('keydown');
      document.removeEventListener('keyup');
    };
  }, [letter]);
  return (
    <svg
      onMouseDown={() => clickHandler(setClicked, true)}
      onMouseUp={() => clickHandler(setClicked, false)}
      onMouseLeave={() => clickHandler(setClicked, false)}
      onKeyDown={evt => keyHandler(setClicked, true, evt, letter)}
      onKeyUp={evt => keyHandler(setClicked, false, evt, letter)}
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

function clickHandler(setter, bool) {
  setter(bool);
}

function keyHandler(setter, bool, evt, letter) {
  if (evt.key === letter) {
    setter(bool);
  }
}
