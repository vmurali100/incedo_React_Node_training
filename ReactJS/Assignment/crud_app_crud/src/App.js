import logo from './logo.svg';
import './App.css';
import Register from './Register';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Froms from './components/Forms';
function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Link to="/">Home Forms(Class Components)</Link><br/><br/>
      <Link to="/register">Register Form (Functional Components)</Link>
      <Routes>
        <Route path="/" element={<Froms/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
