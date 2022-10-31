import './App.scss';
import Races from './Races';
import { useState } from 'react';
import factions from '../data/factions.json';
import Factions from './Factions';

function App() {
  const [selectedRace, setSelectedRace] = useState('');

  return (
    <div className="App">
      <Races factions={factions} setSelectedRace={setSelectedRace} />
      <Factions factions={factions} selectedRace={selectedRace} />
    </div>
  );
}

export default App;
