import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
