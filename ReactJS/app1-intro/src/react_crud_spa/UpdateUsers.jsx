import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from './UserForm';

const UpdateUsers = () => {
  const [user,setUser] = useState({})
  const params = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3000/users/"+params.id).then((response) => {
      setUser(response.data)
    });
  }, []);

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = () => {
    console.log(user)
    axios.put("http://localhost:3000/users/"+params.id, user).then(() => {
      navigate("/")
    });
  };
  return (
    <div className='container'>
      <h2>Welcome to Update User !!</h2>
      <UserForm user={user} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default UpdateUsers;
