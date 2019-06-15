import React from 'react';
import './EntryBar.css';

const EntryBar = ({ displayInstructions, letters }) => {
  return (
    <div>
      <div className={displayInstructions ? 'dim entry-bar' : 'entry-bar'}>
        Testing
      </div>
    </div>
  );
};

export default EntryBar;
