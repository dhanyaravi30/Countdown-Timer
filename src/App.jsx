import React from 'react';
import CountdownTimer from './CountdownTimer';

const App = () => {
  return (
    <div>
      <CountdownTimer initialTime={300} /> {/* 300 seconds = 5 minutes */}
    </div>
  );
};

export default App;
