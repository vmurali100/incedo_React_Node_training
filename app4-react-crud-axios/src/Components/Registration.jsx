import React from "react";
import { useState } from "react";
import UserForm from "./UserForm";
import axios from "axios";
import UserTable from "./UsersTable";
import { useEffect } from "react";

const Registration = () => {
  const [user, setUser] = useState({ fname: "", lname: "", email: "",id:"" });
  const [editIndex, seteditIndex] = useState(null);
  const [users, setUsers] = useState([]);

  // Use Effect will trigger after component Renders ... Similar to componentDidMount

  useEffect(()=>{
    getAllUsers()
  },[])
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3000/user", user).then(() => {
      clearForm();
      getAllUsers();
    });
  };

  const clearForm = () => {
    setUser({ fname: "", lname: "", email: "" });
  };

  const getAllUsers = () => {
    axios.get("http://localhost:3000/user").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };

  const deleteuser = (user) => {
    axios.delete("http://localhost:3000/user/"+user.id).then(()=>{
        getAllUsers()
    })
  };
  const editUser=(user)=>{
    setUser(user);

  }
  const updateUser = () => {
    axios.put("http://localhost:3000/user"+user.id,user).then(()=>{
      
    })
  };
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