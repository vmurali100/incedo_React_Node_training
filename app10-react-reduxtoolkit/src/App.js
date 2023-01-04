import logo from './logo.svg';
import './App.css';
import ReduxToolKitRegister from './Components/RegisterformRedux';
import ReduxStateDisplay from './Components/ReduxStateDisplay';

function App() {
  return (
    <div className="App">
      <ReduxToolKitRegister />
      <hr/><hr/>
      <ReduxStateDisplay />
    </div>
  );
}

export default App;
