import logo from "./logo.svg";
import "./App.css";
import { Users } from "./components/users";
import { CreateUser } from "./components/createUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
