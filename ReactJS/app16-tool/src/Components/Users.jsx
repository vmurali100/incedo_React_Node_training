import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAsyncAction, getAllUsersAsyncAction, deleteUser,editUserAsyncAction } from "../store/userSlice";

const Users = () => {
    const [user, setUser] = useState({email:"",username:"",password:""});
    const[isEdit, setIsEdit] = useState(false);
    const usersDetails = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsersAsyncAction());
    }, []);
    
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


    const handleDelete = (i) => {
        dispatch(deleteUser(i));
    };
    const addUser = () => {
        dispatch(addUserAsyncAction(user));
    };
    const updateUser = ()=>{
        dispatch(editUserAsyncAction(user));
        console.log("Updated user is : ",user)
        clearForm();
    }
    const clearForm=()=>{
        setUser({email:"",username:"",password:""});
        setIsEdit(false);
    }
    return (
        <div className="container">
                <label htmlFor="username" >User Name</label>
                <input className="form-control" value={user.username} onChange={(e) => { handleChange(e) }} type="text" name="username" />
                <label htmlFor="password" >Password</label>
                <input className="form-control" value={user.password} onChange={(e) => { handleChange(e) }} type="text" name="password" />
                <label htmlFor="email" >Email ID</label>
                <input className="form-control" value={user.email} onChange={(e) => { handleChange(e) }} type="text" name="email" />
    
                {isEdit ? (<button onClick={updateUser}>Update</button>) : (<button onClick={addUser}>Register</button>)}
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersDetails.users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={()=>{handleEdit(user)}}>Edit User</button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            handleDelete(i);
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