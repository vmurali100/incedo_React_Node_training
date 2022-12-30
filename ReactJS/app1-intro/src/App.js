import Registration from "./Form2/Registration";
import CreateUser from "./react_crud_spa/CreateUser";
import DeleteUser from "./react_crud_spa/DeleteUser";
import NavBar from "./react_crud_spa/NavBar"
import ReadUsers from "./react_crud_spa/ReadUsers";
import UpdateUsers from "./react_crud_spa/UpdateUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ReadUsers />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUsers />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

