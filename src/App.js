import React from 'react';
import StartMenu from './components/StartMenu.js'
import MainGame from './components/MainGame.js'
import Clock from './components/clock.js'
import Timer from './components/Timer.js'

import './style/App.css';  

function App() {
  return (
    <div className="App">
      <MainGame/>
      <Clock/>
      <Timer/>
    </div>
  );
}

export default App;
