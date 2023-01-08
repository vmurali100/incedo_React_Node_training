import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserAsyncAction,
  deleteUser,
  getUsersAsyncAction,
  deleteUserAsyncAction,
  editUserAsyncAction
} from "../store/usersSlice";

const Users = () => {
  const [user,setUser]=useState({username:"",fname:"",email:"",password:""})
  const usersDetails = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (i) => {
    dispatch(deleteUser(i));
  };

  useEffect(() => {
    dispatch(getUsersAsyncAction());
  }, []);
  const addUser = () => {
    dispatch(
      addUserAsyncAction(user)
    );
  };
  const handleChange=(e)=>{
    let newUser={...user}
    newUser[e.target.name]=e.target.value;
    setUser(newUser);
  }
  return (
    <div className="container">
      <label htmlFor="username" >User Name</label>
      <input className="form-control" value={user.username} onChange={(e)=>{handleChange(e)}} type="text" name="username"/>
      <label htmlFor="fname" >First Name</label>
      <input className="form-control" value={user.fname} onChange={(e)=>{handleChange(e)}} type="text" name="fname"/>
      <label htmlFor="email" >Email ID</label>
      <input className="form-control" value={user.email} onChange={(e)=>{handleChange(e)}} type="text" name="email"/>
      <label htmlFor="password" >Password</label>
      <input className="form-control" value={user.password} onChange={(e)=>{handleChange(e)}} type="password" name="password"/>
      <button onClick={addUser} className="btn btn-primary">
        Add User
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersDetails.users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.fname}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button className="btn btn-warning"
                onClick={()=>{
                    dispatch(editUserAsyncAction(user));
                }}>Edit User</button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteUserAsyncAction(user));
                  }}
                >
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
