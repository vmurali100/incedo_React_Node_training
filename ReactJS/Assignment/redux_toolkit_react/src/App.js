import "./App.css";
import Table from "./Components/Table";
import TableRedux from "./Components/Table_Redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/api"}>API DATA</Link>
        <br />
        <Link to={"/redux"}>REDUX DATA</Link>
        <Routes>
          <Route path="/api" element={<Table />} />
          <Route path="/redux" element={<TableRedux />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
