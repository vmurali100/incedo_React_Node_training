import './App.css';
import EditUser from "./Components/EditUser";
import CreateUser from "./Components/CreateUser";
import Users from './Components/Users';
import {Routes, Route,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/edit' element={<EditUser/>}/>
          <Route path='/create' element={<CreateUser/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
