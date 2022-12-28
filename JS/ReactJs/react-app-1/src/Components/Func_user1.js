import React, { useState } from "react";
const Func_user1=()=>{
    const [user,setUser]=useState({fname:"" ,lname:"",username:"",email:"",password:"",bio:""})
    const handleChange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value
        setUser(newUser)
    }
    const Submit=()=>{
        console.log(user)
        setUser({fname:"" ,lname:"",username:"",email:"",password:"",bio:""})
    }
    return(
        <div>
            <h2>Register</h2>
            <form>
                <label>First Name</label><br/>
                <input type="text" name="fname" onChange={(e)=>{handleChange(e)}} value={user.fname}/><br/><br/>
                <label>Last Name</label><br/>
                <input type="text" name="lname" onChange={(e)=>{handleChange(e)}} value={user.lname}/><br/><br/>
                <label >Username:</label><br/>
                <input type="text" name="username" onChange={(e)=>{handleChange(e)}} value={user.username}/><br/><br/>
                <label >Email:</label><br/>
                <input type="text" name="email" onChange={(e)=>{handleChange(e)}} value={user.email}/><br/><br/>
                <label >Password:</label><br/>
                <input type="password" name="password" onChange={(e)=>{handleChange(e)}} value={user.password}/><br/><br/>
                <label >Short Bio</label><br/>
                <textarea name="bio"  onChange={(e)=>{handleChange(e)}} rows="4" cols="50" value={user.bio}/><br/><br/>
                
                <button onClick={Submit} type="button">Submit</button>

            </form>
        </div>
    )
}
export default Func_user1;