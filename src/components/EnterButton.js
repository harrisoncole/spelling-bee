import React from 'react';

const EnterButton = ({ checkWord, enterPressed }) => {
  return (
    <div
      className={enterPressed ? 'btn side pressed' : 'btn side'}
      onClick={checkWord}
    >
      Enter
    </div>
  );
};

export default EnterButton;
