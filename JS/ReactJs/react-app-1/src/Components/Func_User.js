import React, { useState } from "react";
const UserForm=()=>{
   
        const [user,setUser]=useState({fname:"",lname:"",email:"",username:"",password:"",confmpassword:""})
        const register=()=>{
            console.log(user)
            clearForm()
        }
        const handleChange=(e)=>{
            let newUser={...user}
            newUser[e.target.name]=e.target.value
            setUser(newUser)
        }
        const clearForm=()=>{
            setUser({fname:"",lname:"",email:"",username:"",password:"",confmpassword:""})   
        }
   
        return(
            <div>
                <h2>Register</h2>
                <form>

                    <label >First Name:</label>
                    <input type="text" name="fname" onChange={(e)=>{handleChange(e)}} value={user.fname}/><br/><br/>
                    <label >Last Name:</label>
                    <input type="text" name="lname" onChange={(e)=>{handleChange(e)}} value={user.lname}/><br/><br/>
                    <label >Email:</label>
                    <input type="text" name="email" onChange={(e)=>{handleChange(e)}} value={user.email}/><br/><br/>
                    <label >Username:</label>
                    <input type="text" name="username" onChange={(e)=>{handleChange(e)}} value={user.username}/><br/><br/>
                    <label >Password:</label>
                    <input type="password" name="password" onChange={(e)=>{handleChange(e)}} value={user.password}/><br/><br/>
                    <label >Confirm Password:</label>
                    <input type="password" name="confmpassword" onChange={(e)=>{handleChange(e)}} value={user.confmpassword}/><br/><br/>
                    <button onClick={register} type="button">Register</button>
                </form>
            </div>
        )
    
}
export default UserForm;