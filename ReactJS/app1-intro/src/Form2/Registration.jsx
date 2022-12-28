import React, { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import axios from "axios";
import { useEffect } from "react";

const Registration = () => {
  const [user, setUser] = useState({ fname: "", lname: "", email: ""});
  const [users, setUsers] = useState([]);
  const [editIndex,setEditIndex] = useState(null)

  useEffect(()=>{
    getAllUsers()
  },[])

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3000/users", user).then(() => {
      clearForm();
      getAllUsers();
    });
  };


  const clearForm = () => {
    setUser({ fname: "", lname: "", email: ""});
  };
  const getAllUsers = () => {
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };
  const deleteuser = (user) => {
    axios.delete("http://localhost:3000/users/"+user.id).then(()=>{
        getAllUsers()
    })
  };


  const editUser = (user,i)=>{
    setEditIndex(i)
    setUser(user)
  }

  const updateUser = ()=>{
    let newUsers = [...users]
    newUsers[editIndex] = user;
    setUsers(newUsers)
    setEditIndex(null)
    clearForm()
  }

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <UserForm
            user={user}
            setUser={setUser}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            clearForm={clearForm}
            updateUser={updateUser}
            editIndex={editIndex}
          />
        </div>
        <div className="col-8">
          <UserTable users={users} deleteuser={deleteuser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
