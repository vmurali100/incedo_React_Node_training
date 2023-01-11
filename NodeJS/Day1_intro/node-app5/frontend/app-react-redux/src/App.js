import logo from './logo.svg';
import './App.css';
import Users from "./Components/Users";
import {Routes, Route,BrowserRouter} from "react-router-dom";
import EditUser from './Components/EditUser';
import CreateUser from './Components/CreateUser';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}/>
          <Route path='/edit' element={<EditUser/>}/>
          <Route path='/create' element={<CreateUser/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
