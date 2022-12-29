import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import NavBar from './Components/Navbar';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/price" element={<Pricing/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
