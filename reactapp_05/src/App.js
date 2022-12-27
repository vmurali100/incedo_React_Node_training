import logo from './logo.svg';
import './App.css';
import {Person} from './components/Person';
// import Parent from './Components/Parent';
import User , { MainUser, OtherUser } from './components/User';
import User1 from "./components/User1";

function App() {
  return (
    <div className="App">
      {/* <Person/> */}
      <User1/>
       {/* <User/>
        <MainUser/>
        <OtherUser/> */}
      
     
      
    </div>
  );
}

export default App;
