import User, {Otheruser} from './Components/User';
import './App.css';
import { Person } from './Components/Person';

function App() {
  return (
    <div className="App">
      <User/>
      <Otheruser/>
      <Person/>
    </div>
  );
}

export default App;
