import logo from './logo.svg';
import './App.css';
import Person from './Components/Person'
import Parent from './Components/Parent'
import Input from './Components/Input';
import InputNew from './Components/InputNew';
import assignment1 from './Components/assignment1';
import assignment2 from './Components/assignment2';
import RegistrationNew from './Components/RegistrationNew';
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Prices from './Components/Prices'
import Features from './Components/Features';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/prices' element={<Prices/>} />
      <Route path='/features' element={<Features/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
