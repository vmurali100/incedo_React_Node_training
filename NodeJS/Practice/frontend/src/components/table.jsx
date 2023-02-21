import React from 'react'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { deleteUserAction, delUser, getUser, getUsersAction } from '../Slice/Slice';
import { useNavigate } from 'react-router-dom';
export default function Table() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    var users = useSelector((state)=>state.users);
    console.log(users);
    useEffect(()=>{
        dispatch(getUsersAction());
    },[dispatch]);

    const handleDelete = (user) =>{
        dispatch(deleteUserAction(user));
    }
    const handleEdit = (user) =>{
        navigate("/editUser", {state:user});
    }
    const handleAdd = () =>{
        navigate("/addUser");
    }
  return (
    <div>
      <table className="table table-striped-columns">
        <thead>
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users.users.map((user, i) =>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td><button type='button' className='btn btn-warning' onClick={()=>handleEdit(user)}>Edit</button></td>
                    <td><button type='button' className='btn btn-danger' onClick={()=>handleDelete(user)}>Delete</button></td>
                </tr>
            ))}
        </tbody>
      </table>
      <div style={{display:"flex", justifyContent:"center"}}>
        <button type="button" className='btn btn-warning' onClick={()=>handleAdd()} >Add User</button>
      </div>
    </div>
  )
}