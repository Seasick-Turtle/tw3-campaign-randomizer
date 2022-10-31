const SelectedFaction = ({ flag, selectedKey }) => {
  return (
    <div className="selected-faction-container">
      <h3>Selected Faction:</h3>
      <img src={flag} />
      <p>{selectedKey}</p>
    </div>
  );
};

export default SelectedFaction;
