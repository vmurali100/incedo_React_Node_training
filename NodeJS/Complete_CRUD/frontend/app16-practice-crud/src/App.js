import './App.css';
import Table from './component/Table';
import AddUserForm from './component/addUser';
import EditUser from './component/editUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path='/adduser' element={<AddUserForm />} />
        <Route path="/edituser" element = {<EditUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
