import './App.scss';
import RaceHeader from './RaceHeader';

function getImageUrl(name) {
  return new URL(`./assets/images/${name}`, import.meta.url).href;
}

function App() {
  return (
    <div className="App">
      <RaceHeader />
    </div>
  );
}

export default App;
