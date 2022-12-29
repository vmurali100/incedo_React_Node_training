import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReadUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);
  const handleEdit=(user)=>{
    navigate('/update/'+user.id)
  };
  const handleDelete=(user)=>{
    console.log(user)
    navigate('/delete/'+user.id)
  }
  return (
    <div>
      <h2>Welcome to Read Users </h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-warning" onClick={()=>{handleEdit(user)}}>Edit</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={()=>{handleDelete(user)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadUsers;