import logo from './logo.svg';
import './App.css';
import Register from './Register';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Froms from './components/Forms';
import Assignment from './components/Assignment_with_api';
function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Link to="/">Assignment</Link><br/><br/>
      <Link to="/register">Register Form (Functional Components)</Link>
      <Routes>
        <Route path="/" element={<Assignment/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
