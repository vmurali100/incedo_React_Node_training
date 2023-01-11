import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUserAsyncAction, getAllUsersAsyncAction } from "../store/userSlice";

const Users = () => {
  const {users}  = useSelector((state) => state.users);
  const navigate = useNavigate()
  console.log(users)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAsyncAction());
  }, []);

  const editUser=(usr)=>{
    navigate('/edit',{state:usr})
  }
  const deleteUser=async (usr)=>{
    await dispatch(deleteUserAsyncAction(usr));
    navigate('/');
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr,i)=> <tr key={i}>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.phone}</td>
                <td>{usr.subject}</td>
                <td>
                    <button className="btn btn-warning" onClick={()=>{
                        editUser(usr)
                    }}>Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{
                        deleteUser(usr)
                    }}>Deltete</button>
                </td>
            </tr> )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
