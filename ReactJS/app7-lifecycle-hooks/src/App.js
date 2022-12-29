import logo from './logo.svg';
import './App.css';
import LifeCycleA from './Components/LifeCycleA';
import LifeCycleAComp from './Components/LifeCycleAComp';

function App() {
  return (
    <div className="App">
     {/* <LifeCycleA myName = "Murali Krishna"/> */}
     <LifeCycleAComp/>
    </div>
  );
}

export default App