import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SearchComp from './components/SearchComp';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
        {/* <SearchComp /> */}
        <Counter />
    </div>
  );
}

export default App;
