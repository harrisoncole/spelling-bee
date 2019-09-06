import React from 'react';

const EnterButton = ({ checkWord, enterPressed, setFeedback }) => {
  return (
    <div
      className={enterPressed ? 'btn side pressed' : 'btn side'}
      onClick={() => {
        setFeedback(checkWord(), true);
        setTimeout(() => {
          setFeedback(null, false);
        }, 1000);
      }}
    >
      Enter
    </div>
  );
};

export default EnterButton;
