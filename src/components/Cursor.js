import React, { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = ({ displayInstructions }) => {
  let [blink, setBlink] = useState(true);

  useEffect(() => {
    function blinkCursor() {
      setBlink(b => !b);
    }

    const blinkInterval = setInterval(blinkCursor, 1000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={displayInstructions || blink ? 'none' : 'cursor'}>|</div>
  );
};

export default Cursor;
