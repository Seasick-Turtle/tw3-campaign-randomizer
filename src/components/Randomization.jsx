import factions from '../data/factions.json';
import { getSingleRandomFaction } from '../helpers/randomization';

const Randomization = ({ setSelectedRace, setSelectedFaction }) => {
  return (
    <div className="randomization-container">
      <button
        onClick={() => {
          const { randomFaction, randomRace } = getSingleRandomFaction();
          setSelectedRace(randomRace);
          setSelectedFaction(randomFaction);
        }}
      >
        Get random faction
      </button>
    </div>
  );
};

export default Randomization;
