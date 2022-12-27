import React from "react";
import {useState} from "react"

const UserForm=()=>{
    const [user,setUser]= useState({fname:"",lname:"",email:"",uname:"",pass:"",cnfpass:""})

const handleChange=(e)=>{
    let newUser={...user};
    newUser[e.target.name]=e.target.value;
    setUser(newUser);
}
const handleSubmit=()=>{
    console.log(user);
    clearForm();
}
const clearForm=()=>{
    setUser({fname:"",lname:"",email:"",uname:"",pass:"",cnfpass:""})
}
    return (<div>
        <form>
            <label>First name</label><br/>
            <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleChange(e)}}/><br/>
            <label>Last name</label><br/>
            <input type="text" name="lname" value={user.lname} onChange={(e)=>{handleChange(e)}}/><br/>
            <label>Email</label><br/>
            <input type="text" name="email" value={user.email} onChange={(e)=>{handleChange(e)}}/><br/>
            <label>User name</label><br/>
            <input type="text" name="uname" value={user.uname} onChange={(e)=>{handleChange(e)}}/><br/>
            <label>Password</label><br/>
            <input type="password" name="pass" value={user.pass} onChange={(e)=>{handleChange(e)}}/><br/>
            <label>Confirm Password</label><br/>
            <input type="password" name="cnfpass" value={user.cnfpass} onChange={(e)=>{handleChange(e)}}/><br/>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    </div>);
}
export default UserForm;