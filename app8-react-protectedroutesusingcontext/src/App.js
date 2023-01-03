import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/login';
import CreateUser from './Components/CreateUser';
import ReadUser from './Components/ReadUser';
import DeleteUser from './Components/DeleteUser';
import UpdateUser from './Components/UpdateUser';
import NavBar from './Components/NavBar';
import { AuthContext } from './Components/authContext';
import RequiredAuth from './Components/requiredAuth';
import TextClassContext from './Components/TestContext';
import TableComponent from './Components/TableComponent';

function App() 
{
  return (
    <div className="App">
     <AuthContext>
     <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/createuser" element={<CreateUser/>}></Route>
      <Route path="/updateuser/:id" element={<RequiredAuth><UpdateUser/></RequiredAuth>}></Route>
      <Route path="/readuser" element={<ReadUser/>}></Route>
      <Route path="/deleteuser/:id" element={<RequiredAuth><DeleteUser/></RequiredAuth>}></Route>
      <Route path="/tableComponent" element={<TableComponent/>}></Route>
      {/* <Route path="/textcontext" element={<TextClassContext />}></Route> */}
     </Routes>
     </BrowserRouter>
     </AuthContext>
    </div>
  );
}

export default App;
