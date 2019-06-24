import React from 'react';

const EnterButton = ({ checkWord }) => {
  return (
    <div className="btn side" onClick={checkWord}>
      Enter
    </div>
  );
};

export default EnterButton;
