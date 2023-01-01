import { useState } from "react";
import { useCustomAuth } from "./authContext";

const Login = ()=>{

    const [userName,setUserName] = useState('');
    const auth = useCustomAuth();

    const handleLogin = ()=>{
        auth.login(userName);
    }

    return <>
           <div>
           <h1>Welcome to login Component</h1>
           <form>
           <label htmlFor="username">UserName:</label>
           <input type="text" name="username" id="username" onChange={(e)=>{setUserName(e.target.value)}}/>{"    "}
           <button type="button" className="btn btn-primary" onClick={()=>handleLogin()}>login</button>
           </form>
           </div>
           </>
};

export default Login;