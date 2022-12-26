import User, {Otheruser} from './Components/User';
import './App.css';
import { Person } from './Components/Person';
import Parent from './Components/Parent';

function App() {
  return (
    <div className="App">
      <User/>
      <Otheruser/>
      <Person/>
      <Parent/>
    </div>
  );
}

export default App;
