import logo from './logo.svg';
import './App.css';
import Person from './Components/Person'
import Parent from './Components/Parent'
import Input from './Components/Input';
import InputNew from './Components/InputNew';
import RegistrationNew from './Components/RegistrationNew';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Router_crud_axios/Navbar';
import Prices from './Components/Prices'
import Features from './Components/auth-project/Features';
import Registration from './Components/Registration'
import Task from './Components/Task';
import Homepage from './Components/Homepage';
import Home from './Components/auth-project/Home'
import ReadUsers from './Components/Router_crud_axios/ReadUsers';
import CreateUser from './Components/Router_crud_axios/CreateUser';
import UpdateUsers from './Components/Router_crud_axios/UpdateUsers';
import DeleteUser from './Components/Router_crud_axios/DeleteUser';
import { UseContextProvider } from './Components/context-api/UseContext';
import { AuthProvider } from "./Components/auth-project/auth";
import NavBar from './Components/auth-project/NavBar';
import Login from './Components/auth-project/Login'
import RequiredAuth from './Components/auth-project/RequiredAuth'
import SampleTask from './Components/SampleTask';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App container">
    {/* <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ReadUsers />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUsers />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter> */}

    {/* const [users,setUsers] = useState(["Arun","Kumar","Sam","Sundar","Ravi"])
    <Main users={users}/> 
    <UseContextProvider value={users}>
      <Main/>
    </UseContextProvider> */}

    
      {/* <ClickCounter/>
      <HoverCounter/> */}
 
    {/* <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/features" element={<RequiredAuth> <Features /> </RequiredAuth>} />
          </Routes>
        </BrowserRouter>
    </AuthProvider> */}

    < Timer/>

    </div>
  );
}

export default App;
