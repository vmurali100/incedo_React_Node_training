import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkUser } from '../Slice/Index';

export default function Login() {
    const state = useSelector((state)=>state.data.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user,setUser] = useState({email:"", password:""});
    const [msg,setMsg] = useState("");

    const handleChange = (e) =>{
        var newObj = {...user};
        newObj[e.target.name] = e.target.value;
        setUser({newObj});
    }

    const handleSubmit = async () =>{
        console.log("object")
        await dispatch(checkUser(user));
        const check = useSelector((state)=>state.data.check);
        console.log(check);
        if(check === "true"){
            navigate("/table")
        } 
        else{
            setMsg(check);
        }
    }



    return (
        <div style={{ width: "25%", alignItems: "center", margin: "auto" }}>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>handleChange(e)} value = {user.email} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={(e)=>handleChange(e)} value = {user.password} />
                </div>
                <button type="submit" className="btn btn-primary" onClick = {()=>handleSubmit()}>Submit</button>
                <h2 style={{color:"red"}}>{msg}</h2>
            </form>
        </div>
    )
}
