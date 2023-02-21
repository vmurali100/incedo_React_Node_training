import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux'
import { updateUserAction, updUser } from '../Slice/Slice';
export default function EditUser() {
    var { state } = useLocation();
    var dispatch = useDispatch();
    const navigate = useNavigate();
    const [user,setUser] = useState({id:0, name:"", email:"", gender:"Select Gender", role:"Select Role"});
    useEffect(()=>{
        setUser(state);
    },[state])
    const handleGender = (e) =>{
        setUser({...user,gender:e.target.innerHTML});
    } 
    const handleRole = (e) =>{
        setUser({...user,role:e.target.innerHTML});
    }
    const handleChange = (e) =>{
        var newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
    const handleSubmit = () =>{
        dispatch(updateUserAction(user));
        navigate("/");
    }
    return (
        <div style={{ width: "25%", alignItems: "center", margin: "auto" }}>
            <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">User ID</label>
                    <input type="number" className="form-control" name="id" id="id" aria-describedby="emailHelp" onChange={(e)=>handleChange(e)} value={user.id} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input type="text" name='name' className="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>handleChange(e)} value={user.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={(e)=>handleChange(e)} value={user.email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender   </label>{" "}{" :"}
                    <div className="dropdown-center">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                            {user.gender}
                        </button>
                        <ul className="dropdown-menu">
                            <li><p className="dropdown-item" onClick={(e) => handleGender(e)}>Male</p></li>
                            <li><p className="dropdown-item" onClick={(e) => handleGender(e)}>Female</p></li>
                            <li><p className="dropdown-item" onClick={(e) => handleGender(e)}>Others</p></li>
                        </ul>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role   </label>{" "}{" :"}
                    <div className="dropdown-center">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                            {user.role}
                        </button>
                        <ul className="dropdown-menu">
                            <li><p className="dropdown-item" onClick={(e) => handleRole(e)}>Admin</p></li>
                            <li><p className="dropdown-item" onClick={(e) => handleRole(e)}>Lead</p></li>
                            <li><p className="dropdown-item" onClick={(e) => handleRole(e)}>Developer</p></li>
                        </ul>
                    </div>
                </div>
                <button type="button" onClick={()=>handleSubmit()} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
