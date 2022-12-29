import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import CreateUser from "./components/CreateUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeleteUser from "./components/deleteUser";
import Home from "./components/Home";
import UpdateUsers from "./components/updateuser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
          <Route path="/edit/:id" element={<UpdateUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
