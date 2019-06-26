import React, { useState, useEffect } from 'react';
import './HiveCell.css';
const HiveCell = ({ cellLocation, letter, addLetter }) => {
  let [keyPressed, setKeyPressed] = useState(false);
  useEffect(() => {
    function keyDownHandler(evt) {
      keyHandler(setKeyPressed, true, evt, letter);
    }

    function keyUpHandler(evt) {
      keyHandler(setKeyPressed, false, evt, letter);
    }
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [letter]);
  return (
    <svg
      onMouseDown={evt => {
        addLetter(letter);
      }}
      viewBox="0 0 120 103.92304845413263"
      className={`${cellLocation} hive-cell`}
    >
      <polygon
        className={keyPressed ? 'clicked polygon' : 'polygon'}
        points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
        stroke="white"
        strokeWidth="5"
      />
      <text
        onMouseDown={() => {
          setKeyPressed(true);
          setTimeout(() => setKeyPressed(false), 200);
        }}
        onMouseUp={() => setKeyPressed(false)}
        className={cellLocation === 'center' ? 'letter' : 'edge-letter'}
        x="50%"
        y="50%"
        dy="10.75%"
      >
        {letter}
      </text>
    </svg>
  );
};

export default HiveCell;

function keyHandler(setter, bool, evt, letter) {
  if (evt.key === letter) {
    setter(bool);
  }
}
