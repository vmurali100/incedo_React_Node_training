import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import {BrowseRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowseRouter>
        <Navbar/>
        
      </BrowseRouter>
    </div>
  );
}

export default App;
