import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import {BrowserRouter,Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="main">
      <h2>CRUD OPERATIONS</h2>
      <BrowserRouter>
      <Routes>
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/update" element={<Update />} />
        <Route exact path="/read" element={<Read />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
