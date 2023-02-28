import logo from './logo.svg';
import './App.css';
import GameHeading from './generic components/GameHeading.js';

function App() {
  const header = "TIC-TAC-TOE";
  return (
  <GameHeading header={header}/>  
  );
}

export default App;
