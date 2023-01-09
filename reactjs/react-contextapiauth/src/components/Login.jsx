import React, { useContext , } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { loginFormContext } from './AuthProvider';



function Login() {


    const [ username , setUsername] = useState(null);
   
    const { login } = useContext( loginFormContext);

    let navigate = useNavigate();
    
   
    const handleLogin = ()=> {

          login( username); 
          navigate('/features');  
    }
  return (
    <div>

        <h1>  Login </h1>
        
        < input type='text' name='username' onChange={(e) => setUsername(e.target.value) } />
        <button onClick={handleLogin}> Login </button>
    </div>
  )
}

export default Login