import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserAsync, getUsersAsync } from '../store/dataSlice';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  var users = useSelector((state)=>state.user.users);
  console.log("users:",users);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getUsersAsync());
    },[dispatch]);
    
    const handleAddUser = () =>{
      navigate("/adduser");
    }

    const handleDelete = (user)=>{
      dispatch(deleteUserAsync(user));
    }

    const handleEdit = (user)=>{
      navigate("/edituser",{state:user})
    }

  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last name</th>
                <th>Username</th>
                <th>Email</th>
                <th>edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,i)=>
            <tr key={i}>
                <td>{i+1}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><button type='button' onClick={()=>handleEdit(user)}>edit</button></td>
                <td><button type='button' onClick={()=>handleDelete(user)}>delete</button></td>
            </tr>
            )}
        </tbody>
      </table>
      <button type='button' onClick={()=>handleAddUser()}>Add User</button>
    </div>
  )
}

export default Table;