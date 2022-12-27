import logo from './logo.svg';
import './App.css';
import User, { MainUser, OtherUser } from './User';
import { Person } from "./Person";

function App() {
  return (
    <div className="App">
      {/* <User/>
      <MainUser/>
      <OtherUser/> */}
      <Person/>
    </div>
  );
}

export default App;
