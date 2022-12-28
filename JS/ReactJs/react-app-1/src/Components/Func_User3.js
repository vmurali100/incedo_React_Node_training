import React, { useState } from "react";
const Func_user3=()=>{
    const [user,setUser]=useState({fname:"" ,lname:"",email:"",confmEmail:"",username:"",password:"",confmpwd:""})
    const handleChange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value
        setUser(newUser)
    }
    const register=()=>{
        console.log(user)
        setUser({fname:"" ,lname:"",email:"",confmEmail:"",username:"",password:"",confmpwd:""})
    }
    return(
        <div>
        <h2>Register</h2>
        <form>
        <center>
        <div className="mb-3">
          <label>First Name : </label>
          <input type="text" className="form-label" name="fname" onChange={(e)=>{handleChange(e)}} value={user.fname}/>
          <label>Last Name : </label>
          <input type="text" className="form-label"  name="lname" value={user.lname} onChange={(e)=>{handleChange(e)}} /> <br /></div>
          
          <label >Email: </label>
          <input type="text" name="email" onChange={(e)=>{handleChange(e)}} value={user.email}/> <br />

          <label >Confirm Email: </label>
          <input type="text" name="confmEmail" onChange={(e)=>{handleChange(e)}} value={user.confmEmail}/> <br />
          <label>User Name : </label>
          <input type="text" name="username" onChange={(e)=>{handleChange(e)}} value={user.username}/> <br />
          <div className="col">
          <label>Password: </label>
          <input type="password"  name="password" onChange={(e)=>{handleChange(e)}} value={user.password}/> <br />
          <label>Confirm Password: </label>
          <input type=  "password" name="confmpwd" onChange={(e)=>{handleChange(e)}} value={user.confmpwd}/> <br /></div>
          <button  onClick={register} type="button">Submit</button>
          </center>
        </form>
      </div>
    )
}
export default Func_user3;