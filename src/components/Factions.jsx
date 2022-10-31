import { useEffect, useState } from 'react';
import SelectedFaction from './SelectedFaction';

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

const getFactionKey = (selectedRace, flag) =>
  Object.keys(selectedRace).find((key) => selectedRace[key].flag === flag);

const Factions = ({ factions, selectedRace }) => {
  const [factionKeys, setFactionKeys] = useState([]);
  const [selectedKey, setSelectedKey] = useState();
  const [selectedFaction, setSelectedFaction] = useState();

  useEffect(() => {
    if (factions && selectedRace) {
      setFactionKeys(Object.entries(factions[selectedRace]));
    }
  }, [factions, selectedRace]);

  return (
    <div className="faction-flag-container">
      {selectedRace && factionKeys && (
        <span className="faction-flags">
          {factionKeys.map(([key, value], index) => (
            <span className="faction-flag-group">
              <img
                onClick={() => {
                  setSelectedFaction(value.flag);
                  setSelectedKey(
                    getFactionKey(factions[selectedRace], value.flag)
                  );
                }}
                key={index}
                className="faction-flag"
                src={getImageUrl(value.flag)}
              />
              <p>{key}</p>
            </span>
          ))}
        </span>
      )}
      {selectedFaction && (
        <SelectedFaction
          flag={getImageUrl(selectedFaction)}
          selectedKey={selectedKey}
        />
      )}
    </div>
  );
};

export default Factions;
