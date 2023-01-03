import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import ReadUser from "./Components/ReadUsers";
import CreateUser from "./Components/CreateUser";
import { AuthProvider } from "./Components/auth";
import RequiredAuth from "./Components/RequiredAuth";
import Login from "./Components/Login";
function App() {
  return (
    <BrowserRouter> <AuthProvider>

    <Link to="/">Home</Link><br/><br/>
    <Link to="/create">Create User</Link><br/><br/>
      <Routes>
        <Route path="/" element={<RequiredAuth><ReadUser /></RequiredAuth> }></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/update" element={<ReadUser />}></Route>
        <Route path="/delete" element={<CreateUser />}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
