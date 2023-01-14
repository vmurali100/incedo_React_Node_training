import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateUser } from './Components/CreateUser';
import { DeleteUser } from './Components/DeleteUser';
import { ReadUser } from './Components/ReadUser';
import { UpdateUser } from './Components/UpdateUser';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<CreateUser/>}/>
        <Route path = '/deleteuser/:id' element={<DeleteUser/>}/>
        <Route path = '/readuser' element={<ReadUser/>}/>
        <Route path = '/updateuser/:id' element={<UpdateUser/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
