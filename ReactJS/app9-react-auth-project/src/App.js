import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Features from "./Components/Features";
import { AuthProvider } from "./Components/auth";
import RequiredAuth from "./Components/RequiredAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/features"
              element={
                <RequiredAuth>
                  <Features />
                </RequiredAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
