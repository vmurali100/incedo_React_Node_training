import logo from "./logo.svg";
import "./App.css";
import Users from "./Component/Users";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EditUser from "./Component/EditUser";
import CreateUser from "./Component/CreateUser";
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
