import React, { useState } from 'react';
import './App.css';

function App() {
  const [isBackgroundWhite, setBackgroundWhite] = useState(true);

  const toggleBackgroundColor = () => {
    setBackgroundWhite((prev) => !prev);
  };

  const backgroundColor = isBackgroundWhite ? '#ffffff' : '#000000';
  const textColor = isBackgroundWhite ? '#000000' : '#ffffff';

  return (
    <div
      className="app"
      style={{ backgroundColor, color: textColor }}
    >
      <h1>Color Toggle App</h1>
      <p>
        Click the button below to toggle the background color of the web page.
      </p>
      <button onClick={toggleBackgroundColor}>Toggle Background Color</button>
    </div>
  );
}

export default App;
