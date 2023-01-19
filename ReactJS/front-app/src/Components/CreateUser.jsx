import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { addUserAsyncAction } from "../store/userSlice";
import UserForm from "./UserForm";

const CreateUser=()=>{
    const [user,setUser]=useState({name:"",email:"",mobileno:""});
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        const newUser={...user};
        newUser[e.target.name]=e.target.value;
        setUser(newUser)
    }
    const handleSubmit=()=>{
        dispatch(addUserAsyncAction(user));
        navigate('/');
    }
    return(
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <UserForm user={user} handleChange={handleChange} handleSubmit={handleSubmit}/>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default CreateUser;