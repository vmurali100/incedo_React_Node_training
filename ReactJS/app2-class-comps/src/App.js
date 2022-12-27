import logo from './logo.svg';
import './App.css';
//destructure when default is not used
import User,{User2} from './Components/users';
import { Person } from './Components/Person';
import { Parent } from './Components/Parent';
function App() {
  return (
    <div className="App">
      <User/>
      <User2/>
      <Person/>
      <Parent/>
    </div>
  );
}

export default App;
