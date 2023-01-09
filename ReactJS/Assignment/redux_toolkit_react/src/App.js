import "./App.css";
import Table from "./Components/Table";
import TableRedux from "./Components/Table_Redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import AuthProvider from "./Login/Auth";
import Login from "./Components/Login";
import RequiredAuth from "./Login/RequiredAuth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Link to={"/api"}>API DATA</Link>
        <br />
        <Link to={"/redux"}>REDUX DATA</Link>
        <Routes>
          <Route path="/api" element={<RequiredAuth><Table /></RequiredAuth> } />
          <Route path="/login" element={<Login/>} />

          <Route path="/redux" element={<RequiredAuth><TableRedux /></RequiredAuth> } />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
