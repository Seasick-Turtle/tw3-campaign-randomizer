import factions from '../data/factions.json';

const raceKeys = Object.entries(factions);

const getRandomRace = () => {
  return raceKeys[Math.floor(Math.random() * (raceKeys.length - 0) + 0)][0];
};

export const getSingleRandomFaction = () => {
  const randomRace = getRandomRace();
  const randomFaction = Object.keys(factions[randomRace])[
    Math.floor(
      Math.random() * (Object.keys(factions[randomRace]).length - 0) + 0
    )
  ];

  return { randomFaction, randomRace };
};

export const getMultipleRandomFactions = () => {
  const randomRace = getRandomRace();
  const randomFaction = Object.keys(factions[randomRace])[
    Math.floor(
      Math.random() * (Object.keys(factions[randomRace]).length - 0) + 0
    )
  ];

  return randomFaction;
};
