import logo from "./logo.svg";
import "./App.css";
import Forms from "./Components/Froms";
import UserData from "./Components/UserData";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Edit from "./Components/EditData";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserData/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/create" element={ <Forms />}/>
      </Routes>
     
      
      </BrowserRouter>
    </div>
  );
}

export default App;
