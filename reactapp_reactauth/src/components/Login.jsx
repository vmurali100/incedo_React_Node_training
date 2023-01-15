import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthConsumer } from './Auth'
import NavBar from './Navbar'

export const Login = () => {

    const [user,setUser] = useState("")
    const navigate = useNavigate()
    const {login} = AuthConsumer();

    const handleChange = (e)=>{
        var username = e.target.value;
        setUser(username)
        

    }

    const handleLogin = ()=>{

        login(user);

        navigate("/features")

    }
  return (
    <div>
       <form>
        <br/>
        <label htmlFor="User Name">User Name :</label>
        <input type ="text" name=""  onChange={(e)=>{handleChange(e)}}/>
        <br/>
        <br/>
        <button className="btn btn-primary" type="button" onClick={handleLogin}>Login</button>
       </form>
      
    </div>
  )
}
