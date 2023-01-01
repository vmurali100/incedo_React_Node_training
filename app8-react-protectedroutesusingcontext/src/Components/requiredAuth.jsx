import React,{Component} from 'react';
import { useCustomAuth } from './authContext';
import {useNavigate} from "react-router-dom";

const RequiredAuth = ({children})=>
{
    const {user} = useCustomAuth();
    const navigate = useNavigate();

    const handleLogin = ()=>{
        navigate('/login');
    }
    console.log(user)
    if(!user)
    {
        return <>
               <p style={{color:"red"}}>Please Login in to manipulate the UserTable</p>
               <button type="button" onClick={handleLogin}>Go to Login Page</button>
               </>;
    }
    return children;
};

export default RequiredAuth;