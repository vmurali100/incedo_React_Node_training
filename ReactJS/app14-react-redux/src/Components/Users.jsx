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
  const [user,setUser]=useState({username:"",fname:"",email:"",password:"",programinglang:""});
  const [users,setUsers]=useState([]);
  const[isEdit, setIsEdit] = useState(false);
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
  const handleEdit = (usr) => {
    setIsEdit(true);
    setUser(usr)
    console.log(usr)
}
const updateUser = ()=>{
  dispatch(editUserAsyncAction(user));
  clearForm();
}
const clearForm =()=>{
  setUser({username:"",fname:"",email:"",password:"",programinglang:""})
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
      <label htmlFor='programinglang'>Programing Language:</label>
                <select name="programinglang" id="programinglang" onChange={(e)=>{handleChange(e)}} value={user.programinglang}>
                    <option value=''>Select the programming language</option>
                    <option value='java'>JAVA</option>
                    <option value='python'>PYTHON</option>
                    <option value='javascript'>JAVASCRIPT</option>
                </select><br/><br/>
      {isEdit? (<button onClick={()=>{updateUser()}}>Update</button>) :(<button onClick={addUser}>Register</button>)}
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
                    handleEdit(user);
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
