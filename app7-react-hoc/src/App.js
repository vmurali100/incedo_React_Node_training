import logo from './logo.svg';
import './App.css';
import HoverComponent from './Components.jsx/HoverIncrement';
import ClickIncrement from './Components.jsx/ClickIncrement';

function App() {
  return (
    <div className="App">
      <HoverComponent />
      <hr/><hr/>
      <ClickIncrement />
    </div>
  );
}

export default App;
