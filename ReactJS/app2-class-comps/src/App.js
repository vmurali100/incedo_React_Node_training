import './App.css';
import { Person } from './Components/Person';
import User, { MainUser, OtherUser } from './Components/User'

function App() {
  return (
    <div className="App">
      <Person/>
      {/* <User/>
      <MainUser/>
      <OtherUser/> */}
    </div>
  );
}

export default App;
