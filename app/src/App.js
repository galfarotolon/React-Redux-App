import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SpellCard from './components/SpellCard'
import SpellDesc from './components/SpellDesc'




export function App() {

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="App">

      <h1>Dungeons And Dragons Spell Generator</h1>

      <button className='newSpellBtn' onClick={refreshPage}>Generate Random Spell</button>

      <div className='spellCard'>
        <SpellCard />
        <SpellDesc />

      </div>


    </div>
  );
}

export default App;
