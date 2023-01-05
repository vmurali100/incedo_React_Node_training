import React from 'react'
import { useState } from 'react';
import UserForm from './UserForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
  const [user, setUser] = useState({ fname: "", lname: "", email: "" });
  const navigate = useNavigate()
 
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = () => {
    console.log(user)
    axios.post("http://localhost:3000/users", user).then(() => {
      clearForm();
      navigate("/")
    });
  };

  const clearForm = () => {
    setUser({ fname: "", lname: "", email: "" });
  };

  return (
    <div className='container'>
      <h2>Welcome to Create User</h2>
      <UserForm user={user} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default CreateUser;