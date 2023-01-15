
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './Auth';

export const RequiredAuth = ({children}) => {
    const {users} = AuthConsumer();
    const navigate = useNavigate();

    const handleLogin = ()=>{
        navigate("/login")
    }

    console.log(users)


    if(!users){
        return <><p style={{ color: "red" }}>Please login to view the features!</p>
        <button type="button" className="btn btn-primary mt-1" onClick={handleLogin}>Go to Login</button></>

    }

    

  return children;
    
  
}
