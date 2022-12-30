import React, { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import axios from "axios";
import { useEffect } from "react";

const Registration = () => {
  const [user, setUser] = useState({ name: "", username: "", email: "",address:"",phone:"",website:"",company:""});
  const [users, setUsers] = useState([]);
  const [editIndex,setEditIndex] = useState(null)
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
    response.data.forEach((user)=>{
        user.showAddress = false;
        user.showCompany = false;
    })    
    setUsers(response.data);});
    console.log(users);
},[]);
const toggleAddress = (user)=>{

    const newUsers = [...users];
    newUsers.forEach((usr)=>{
        if(user.id === usr.id)
        {
            usr.showAddress = !usr.showAddress
        }
    })
    setUsers(newUsers);

};
const toggleCompany = (user)=>{
    const newUsers = [...users];
    newUsers.forEach((usr)=>{
        if(user.id === usr.id)
        {
            usr.showCompany = !usr.showCompany
        }
    })
    setUsers(newUsers);
};


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
    setUser({name: "", username: "", email: "",address:"",phone:"",website:"",company:""});
  };
  const getAllUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };
  const deleteuser = (user) => {
    axios.delete("https://jsonplaceholder.typicode.com/users/"+user.id).then(()=>{
        getAllUsers()
    })
  };


  const editUser = (user,i)=>{
        setEditIndex(i)
        setUser(user)
  }

  const updateUser = ()=>{
    axios.put("https://jsonplaceholder.typicode.com/users/"+user.id,user).then(()=>{
        getAllUsers();
        setEditIndex(null);
        clearForm();
    })
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
          <UserTable users={users} deleteuser={deleteuser} editUser={editUser} 
          toggleAddress={toggleAddress} toggleCompany={toggleCompany}/>
        </div>
      </div>
    </div>
  );
};

export default Registration;
