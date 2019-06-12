import React, { useState } from 'react';
import { Nav, Instructions } from './components/index';

function App() {
  const [displayInstructions, setDisplayInstructions] = useState(false);

  return (
    <div>
      <Nav
        displayInstructions={displayInstructions}
        setDisplayInstructions={setDisplayInstructions}
      />
    </div>
  );
}

export default App;
