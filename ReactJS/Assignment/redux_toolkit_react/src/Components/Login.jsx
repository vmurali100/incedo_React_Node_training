import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CustomContext, UserContext } from "../Login/Auth"

export default function Login()
{
    const {login}=CustomContext();
    const [user,setUser]=useState("");
    const navigate=useNavigate()
    const onChange=(e)=>
    {
         setUser(e.target.value)
    }
    return <Fragment>
        <label htmlFor="username" >Username :</label>
        <input type="text" name="username" onChange={(e)=>onChange(e)} />
        <button onClick={()=>{login(user);navigate("/redux")}}>Login</button>
    </Fragment>

}