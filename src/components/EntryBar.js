import React from 'react';
import './EntryBar.css';

const EntryBar = ({ displayInstructions, currentWord }) => {
  return (
    <div className="entry-bar">
      <div className={displayInstructions ? 'dim entry-bar' : 'entry-bar'} />{' '}
      {currentWord.map((letter, idx) => (
        <span key={idx} className={letter.class}>
          {letter.letter}
        </span>
      ))}
    </div>
  );
};

export default EntryBar;
