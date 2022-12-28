import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavBar from './Components/NavBar';
import DeleteUser from './Components/DeleteUser';
import ReadUser from './Components/ReadUser';
import CreateUser from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CreateUser/>} />
        <Route path="/read" element={<ReadUser/>} />
        <Route path="/update" element={<UpdateUser/>} />
        <Route path="delete" element={<DeleteUser/>} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
