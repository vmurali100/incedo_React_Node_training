import logo from './logo.svg';
import './App.css';
import Users from './Component/Users';
import EditUser from './Component/EditUser';
import CreateUser from './Component/CreateUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/edit" element={<EditUser />} />
          <Route path="/createUser" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
