import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteUser = () => {
  const [user,setUser] = useState({})
  const params = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3000/users/"+params.id).then((response) => {
      setUser(response.data)
    });
  }, []);

  const confirmDelete=()=>{
    axios.delete("http://localhost:3000/users/"+params.id).then(response=>{
      navigate('/')
    })
  }
  console.log(params);
  return (
    <div>
      <h2>Welcome to Delete User</h2>
      <ul>
      <li>{user.fname}</li>
      <li>{user.lname}</li>
      <li>{user.email}</li>
      </ul>
      <button onClick={confirmDelete} className="btn btn-danger">Confirm Delete</button>
    </div>
  );
};

export default DeleteUser;
