import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadUsers from "./Components/ReadUsers";
import CreateUser from "./Components/CreateUser";
import UpdateUsers from "./Components/UpdateUsers";
import DeleteUser from "./Components/DeleteUser";
import NavBar from "./Components/NavBar";
import SampleTask from "./Components/SampleTask";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ReadUsers />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update" element={<UpdateUsers />} />
          <Route path="/delete" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter> */}
      <SampleTask/>
    </div>
  );
}

export default App;
