import React from "react";
import { useState } from "react";
import UserFormNew from "./UserFormNew";
import axios from "axios";
import UserTableNew from "./UserTableNew";
import { useEffect } from "react";

const RegistrationNew = () => {
  const [user, setUser] = useState({ fname: "", lname: "", email: "" });
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
    axios.post("http://localhost:3000/users", user).then(() => {
      clearForm();
      getAllUsers();
    });
  };

  const clearForm = () => {
    setUser({ fname: "", lname: "", email: "" });
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
  const updateUser = () => {};
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <UserFormNew
            user={user}
            handleChange={handleChange}
            editIndex={editIndex}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="col-8">
          <UserTableNew
            users={users}
            deleteuser={deleteuser}
            updateUser={updateUser}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationNew;