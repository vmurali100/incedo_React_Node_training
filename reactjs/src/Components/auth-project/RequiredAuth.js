import React from "react";
import { useNavigate } from "react-router-dom";
import { useCustomAuth } from "./auth";

const RequiredAuth = ({children}) => {
  const { user } = useCustomAuth();
  const navigate = useNavigate()
  const handeLogin = ()=>{
    navigate('/login')
  }
  console.log(user)
  if (!user) {
   return <>

      <p style={{ color: "red" }}>Please Login to View the Features !!!</p>

      <button onClick={handeLogin} className="btn btn-primary mt-1 ">Go To Login</button>

    </>;
  }
  else
  return children;
};

export default RequiredAuth;