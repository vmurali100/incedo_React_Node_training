import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";
function App() {
  return (
    <div className="App container">
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
