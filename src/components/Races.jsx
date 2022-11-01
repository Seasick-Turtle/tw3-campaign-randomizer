import React, { useMemo } from 'react';
import Randomization from './Randomization';

const Races = ({ factions, setSelectedRace, setSelectedFaction }) => {
  const raceList = useMemo(
    () => Object.keys(factions),
    [Object.keys(factions)]
  );

  return (
    <div className="race-header-container">
      <label className="race-header-list-label">Races</label>

      <Randomization
        setSelectedRace={setSelectedRace}
        setSelectedFaction={setSelectedFaction}
      />
      <ul className="race-header-list">
        {raceList?.length &&
          raceList.map((race, index) => (
            <li key={index} className="race-list-item">
              <button
                className="race-list-item-button"
                onClick={() => {
                  setSelectedRace(race);
                }}
                id={race}
              >
                {race}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Races;
