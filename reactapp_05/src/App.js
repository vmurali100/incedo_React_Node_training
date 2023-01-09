import logo from './logo.svg';
import './App.css';
import {Person} from './Components/Person';
import User , { MainUser, OtherUser } from './Components/User';
import Showmsg from './Components/Showmsg';
import { Funcform } from './Components/Funcform';
import Registration from './Components/Registration';
import Assclass from './Components/Assclass';
import Form from './Components/Form';

function App() {
  return (
    <div className="App container">
      
      <Registration/>
      {/* <Form/> */}
      {/* <FunctionForm/> */}
     
      
    </div>
  );
}

export default App;
