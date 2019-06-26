import React from 'react';
import STORE from './STORE';
import Stage from './Stage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Stage participants={STORE.participants} />
    </div>
  );
}

export default App;
