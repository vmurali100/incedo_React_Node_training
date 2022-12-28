import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Features from './Components/features';
import Pricing from './Components/pricing'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
