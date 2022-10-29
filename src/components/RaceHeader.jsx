import React, { useMemo } from 'react';
import factions from '../data/factions.json';

const RaceHeader = () => {
  const raceList = useMemo(
    () => Object.keys(factions),
    [Object.keys(factions)]
  );

  return (
    <div className="race-header-container">
      <label className="race-header-list-label">Races</label>
      <ul className="race-header-list">
        {raceList?.length &&
          raceList.map((race, index) => (
            <li className="race-list-item" id={race} key={index}>
              {race}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RaceHeader;
