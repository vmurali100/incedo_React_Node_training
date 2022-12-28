import React, { useState } from "react";
const Func_user2=()=>{
    const [user,setUser]=useState({fname:"" ,lname:"",username:"",email:"",phone:"",password:"",shortbio:""})
    const handleChange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value
        setUser(newUser)
    }
    const register=()=>{
        console.log(user)
        setUser({fname:"" ,lname:"",username:"",email:"",phone:"",password:"",shortbio:""})
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
          <div className="grid-container">
          <label>User Name : </label>
          <input type="text" name="username" onChange={(e)=>{handleChange(e)}} value={user.username}/> <br /></div>
          <label >Email: </label>
          <input type="text" name="email" onChange={(e)=>{handleChange(e)}} value={user.email}/> <br />
          <label>Phone : </label>
          <input type="text" name="phoneno" onChange={(e)=>{handleChange(e)}} value={user.phoneno}/> <br />
          <label>Password : </label>
          <input type="password"  name="password" onChange={(e)=>{handleChange(e)}} value={user.password}/> <br />
          <label>Short Bio : </label>
          <textarea type="text" name="shortbio" onChange={(e)=>{handleChange(e)}} value={user.shortbio}/> <br />
          <button  onClick={register} type="button">Submit</button>
          </center>
        </form>
      </div>
    )
}
export default Func_user2;