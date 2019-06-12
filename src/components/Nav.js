import React from 'react';
import './Nav.css';

const Nav = ({ displayInstructions, setDisplayInstructions }) => {
  return (
    <div>
      <h1>Spelling Bee</h1>
      <div className={displayInstructions ? 'nav-bar dim' : 'nav-bar'}>
        <div onClick={() => setDisplayInstructions(!displayInstructions)}>
          Help me!
        </div>
        <div>Answers</div>
      </div>
    </div>
  );
};

export default Nav;
