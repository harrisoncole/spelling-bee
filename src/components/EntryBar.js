import React, { useState } from 'react';
import './EntryBar.css';

const EntryBar = ({ displayInstructions, currentWord }) => {
  return (
    <div>
      <div className={displayInstructions ? 'dim entry-bar' : 'entry-bar'} />{' '}
      {currentWord}
    </div>
  );
};

export default EntryBar;
