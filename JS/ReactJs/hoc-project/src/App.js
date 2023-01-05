import logo from './logo.svg';
import './App.css';
import HoverCounter from './Components/HoverCounter';
import Clickcounter from './Components/Clickcounter';

function App() {
  return (
    <div className="App">
      <Clickcounter/>
      <br/>
      <HoverCounter/>
    </div>
  );
}

export default App;
