import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Hello Vite + React!</p>
        <p>
          <button
            data-testid='button'
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
