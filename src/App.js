import React, { useState } from 'react';
import { Nav, Game } from './components/index';

function App() {
  const [displayInstructions, setDisplayInstructions] = useState(false);

  return (
    <div>
      <Nav
        displayInstructions={displayInstructions}
        setDisplayInstructions={setDisplayInstructions}
      />
      <Game displayInstructions={displayInstructions} />
    </div>
  );
}

export default App;
