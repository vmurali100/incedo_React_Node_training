import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavBar from './Components/NavBar';
import DeleteUser from './Components/DeleteUser';
import ReadUser from './Components/ReadUser';
import CreateUser from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';
import SampleTask from './sampleTask/SampleTask';


function App()
{

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CreateUser/>} />
        <Route path="/read" element={<ReadUser/>} />
        <Route path="/update/:id" element={<UpdateUser/>} />
        <Route path="/delete/:id" element={<DeleteUser/>} />
      </Routes>
    </BrowserRouter>
    </div>
    // <SampleTask />

    
  );
}

export default App;
