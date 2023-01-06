import logo from './logo.svg';
import './App.css';
import Display from './Components/Display';
import UserRegistration from './Components/UserRegistration'

function App() {
  return (
    <div className="App">
      <UserRegistration/>
      <hr/>
      <Display/>
    </div>
  );
}

export default App;
