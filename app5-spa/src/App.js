import './App.css';
import Navbar from './Components/Navbar';
import Home  from './Components/Home';
import Pricing from './Components/Pricing';
import Features from './Components/Features';
import {BrowserRouter,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<Features />} />
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
