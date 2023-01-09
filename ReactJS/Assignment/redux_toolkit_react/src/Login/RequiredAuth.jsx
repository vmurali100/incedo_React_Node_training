import { CustomContext } from "./Auth"
import {useNavigate } from "react-router-dom"
export default function RequiredAuth({children})
{
    const {user}=CustomContext();
    const navigate=useNavigate()
    console.log("Testings",!user)
    if(!user){
    return <><p>Please Login First </p><button onClick={()=>navigate("/login")} >Go to Login Page</button></>;
    }
    else return children
}