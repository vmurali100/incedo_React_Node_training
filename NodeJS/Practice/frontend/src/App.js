import './App.css';
import Table from './components/table';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App-Container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/editUser" element = {<EditUser />} />
        <Route path="/addUser" element = {<AddUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
