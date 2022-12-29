import logo from "./logo.svg";
import "./App.css";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import ReadUser from "./components/ReadUser";
 import CreateUser from "./components/CreateUser";
 import UpdateUser from "./components/UpdateUser";
 import DeleteUser from "./components/DeleteUser";
 import NavBar from "./components/NavBar";

import SampleTask from "./components/Assignment/SampleTask";

function App() {
  return (
    <div className="App container">
      {<BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ReadUser />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/delete" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter> }
      <SampleTask/>
    </div>
  );
}

export default App;