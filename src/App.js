import React, { useState } from 'react';
import { Nav, Hive } from './components/index';

function App() {
  const [displayInstructions, setDisplayInstructions] = useState(false);

  return (
    <div>
      <Nav
        displayInstructions={displayInstructions}
        setDisplayInstructions={setDisplayInstructions}
      />
      <Hive />
    </div>
  );
}

export default App;
