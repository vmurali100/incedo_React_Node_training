import logo from './logo.svg';
import './App.css';
import {Person} from './components/Person';
// import Parent from './Components/Parent';
import User , { MainUser, OtherUser } from './components/User';
import ClassForm from "./components/ClassForm";
import Registration from "./components/Registration";
import FunctionForm from "./components/FunctionForm";

function App() {
  return (
    <div className="App container">
      
      <ClassForm/>
      {/* <FunctionForm/> */}
     
      
    </div>
  );
}

export default App;
