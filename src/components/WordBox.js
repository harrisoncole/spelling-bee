import React from 'react';
import './WordBox.css';

const WordBox = ({ words, displayInstructions }) => {
  return (
    <div className="word-box">
      <div>
        {' '}
        You have found {words.length} {words.length === 1 ? 'word' : 'words'}.
      </div>
      <ul>
        {words.sort().map(word => (
          <li>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordBox;
