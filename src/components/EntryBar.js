import React from 'react';
import './EntryBar.css';

const EntryBar = ({ displayInstructions, currentWord }) => {
  return (
    <div>
      <div className={displayInstructions ? 'dim entry-bar' : 'entry-bar'} />{' '}
      {currentWord.map((letter, idx) => (
        <span key={idx}>{letter.letter}</span>
      ))}
    </div>
  );
};

export default EntryBar;
