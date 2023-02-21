import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from 'react';
import { getAllusers } from './Slice/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import Table from './Components/table';

function App() {
  return (
    <div className="App-Container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/table" element={<Table/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
