import React from "react";
import { useState } from "react";
import UserForm from "./UserForm";
import axios from "axios";
import UserTable from "./UserTable";
import { useEffect } from "react";

const Registration = () => {
  const [user, setUser] = useState({ id: "", fname: "", username: "" ,email:"",address:"",company :""});
  const [editIndex, seteditIndex] = useState(null);
  const [users, setUsers] = useState([]);

  

  useEffect(()=>{
    getAllUsers()
  },[])
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", user).then(() => {
      clearForm();
      getAllUsers();
    });
  };

  const clearForm = () => {
    setUser({ id: "", fname: "",username:"", email: "",address:"",company:"" });
  };

  const getAllUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };
  const showaddress = (user) => {
    axios.showaddress("https://jsonplaceholder.typicode.com/users"+user.id).then(()=>{
        getAllUsers()
    })
  };
  const showcompany = (user) => {
    axios.showcompany("https://jsonplaceholder.typicode.com/users"+user.id).then(()=>{
        getAllUsers()
    })
  };

  const deleteuser = (user) => {
    axios.delete("https://jsonplaceholder.typicode.com/users"+user.id).then(()=>{
        getAllUsers()
    })
  };
  const editUser = (user) => {
    axios.edit("https://jsonplaceholder.typicode.com/users"+user.id).then(()=>{
        getAllUsers()
    })
  };
  const updateUser = () => {};
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <UserForm
            user={user}
            handleChange={handleChange}
            editIndex={editIndex}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="col-8">
          <UserTable
            users={users}
            showaddress={showaddress}
            showcompany={showcompany}
            deleteuser={deleteuser}
            updateUser={updateUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;