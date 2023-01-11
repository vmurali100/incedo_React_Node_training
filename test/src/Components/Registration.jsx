import React, { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import axios from "axios";
import { useEffect } from "react";

const Registration = () => {
  const [user, setUser] = useState({ id: "", name: "", username: "", email: "", phone: "", website: "", address: "", co: ""});
  const [users, setUsers] = useState([]);
  const [editIndex,setEditIndex] = useState(null)

  useEffect(()=>{
    getAllUsers()
  },[])


 


  const clearForm = () => {
    setUser({ id: "", name: "", username: "", email: "", phone: "", website: "",address: "", co: ""});
  };
  const getAllUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };
  const deleteuser = (user) => {
    axios.delete("https://jsonplaceholder.typicode.com/users"+user.id).then(()=>{
        getAllUsers()
    })
  };
  const showaddress = (users,i) => {
    
     
  }
  const showcompany = (user,i) => {
     
  }
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