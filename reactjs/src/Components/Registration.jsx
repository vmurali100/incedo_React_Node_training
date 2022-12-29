import React, { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const Registration = () => {
  const [user, setUser] = useState({ fname: "", lname: "", email: "" }); //stores incoming inputs before submit : 1 object
  const [users,setUsers] = useState([]) //gets submitted here : array of objects
  const [editIndex,setEditIndex] = useState(null)

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = () => {
    //console.log(user);
    let newUsers = [...users];
    newUsers.push(user);
    setUsers(newUsers)
    clearForm();
  };

  const clearForm = () => {
    setUser({ fname: "", lname: "", email: "" });
  };

  const deleteuser = (user) => {
    var newUsers = users.filter((usr) => usr.fname !== user.fname);
    setUsers(newUsers);
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
      <div className="form-container">
        <div className="col-5">
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
        <div className="col-7">
          <UserTable users={users} deleteuser={deleteuser} editUser={editUser}/>
        </div>
      </div>
    </div>
  );
};

export default Registration;