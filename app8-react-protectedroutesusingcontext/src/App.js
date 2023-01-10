import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/login';
import CreateUser from './Components/CreateUser';
import ReadUser from './Components/ReadUser';
import DeleteUser from './Components/DeleteUser';
import UpdateUser from './Components/UpdateUser';
import NavBar from './Components/NavBar';
import { AuthContext, UserContext } from './Components/authContext';
import RequiredAuth from './Components/requiredAuth';
import TextClassContext from './Components/TestContext';
import TableComponent from './Components/TableComponent';
import Parent from './PropsDrillPracticeComponents/ParentComponent';
import {useContext, useState} from 'react';
import { UsersContextProvider } from './ContextApiPracticeComponents/ContextApi';
import ContextParentComponent from './ContextApiPracticeComponents/ContextParentComponent';
import ContextChildComponent from './ContextApiPracticeComponents/ContextChildComponent';
import ThemeAppJS from './ThemeButtonUsingContextAPI/ThemeApp';



function App() 
{
  const [users,setUsers] = useState(["naveen","praveen","sushith","bharath","gowtham"]);
  const [users2,setUsers2] = useState(["naveen2","praveen2","sushith2","bharath2","gowtham2"]);
  return (
    <div className="App">
     {/* <AuthContext>
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
     </Routes>
     </BrowserRouter>
     </AuthContext> */}
     {/* <Parent users={users}/> */}
     {/* <UsersContextProvider value={{users,users2}}>
        <ContextParentComponent/>
     </UsersContextProvider> */}
     <ThemeAppJS />
    </div>
  );
}

export default App;


