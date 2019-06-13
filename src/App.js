import React, { useState } from 'react';
import { Nav, Hive } from './components/index';

function App() {
  const [displayInstructions, setDisplayInstructions] = useState(false);
  const [letters, setLetters] = useState(['a', 'd', 'g', 'n', 'o', 'v', 'b']);
  return (
    <div>
      <Nav
        displayInstructions={displayInstructions}
        setDisplayInstructions={setDisplayInstructions}
      />
      <Hive letters={letters} />
    </div>
  );
}

export default App;
