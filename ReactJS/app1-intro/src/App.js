import React from "react";
import { Component } from "react";

import Registration from "./Form2/Registration";
import CreateUser from "./react_crud_spa/CreateUser";
import DeleteUser from "./react_crud_spa/DeleteUser";
import NavBar from "./react_crud_spa/NavBar"
import ReadUsers from "./react_crud_spa/ReadUsers";
import UpdateUsers from "./react_crud_spa/UpdateUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./ReducerForm/Employees";


import Booklist from "./book/Components/book-list";
import BookDetail from "./book/Components/book-detail";

import Users from "./Reduer/Components/Users";
class App extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh"
      }}>
       <Users/>
      </div>
    );
  }
}


export default App;










{/*function App() {
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

export default App;*/}

{/*
    App for the folder:  ReduxForm 

function App() {
  return (
    <div className="App">
    <Employees/>
    <hr/>
    <Products/>
    </div>
  );
}
*/}

{/*
class App extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh"
      }}>
        <Booklist />
        <BookDetail />
      </div>
    );
  }
}*/}




