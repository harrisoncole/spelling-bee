import React from 'react';
import './Instructions.css';

const Instructions = ({ setDisplayInstructions }) => {
  return (
    <div className="flex-container">
      <div className="instructions-container">
        <div className="close" onClick={() => setDisplayInstructions(false)}>
          X
        </div>
        <h3 className="ins-header">How To Play</h3>
        <h4 className="ins-header">
          <strong>Create words using letters from the hive.</strong>
        </h4>
        <ul>
          <li> Words must contain at least 4 letters.</li>
          <li>Words must include the center letter.</li>
          <li>Words may not be proper nouns or hyphenated.</li>
          <li>Letters can be used more than once.</li>
        </ul>
        <h4 className="ins-header">
          <strong>Score points to increase your rating.</strong>
        </h4>
        <ul>
          <li> 4-letter words are worth 1 point each.</li>
          <li>Longer words earn 1 point per letter.</li>
          <li>
            Each puzzle includes at least one "pangram" which uses every letter.
            These are worth 7 extra points!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
