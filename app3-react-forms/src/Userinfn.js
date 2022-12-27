import React, { useState } from 'react'

export default function Userinfn() {
    const[user,setuser]=useState({fname:"",
    lname:"",
    email:"",
    username:"",
    Enterpwd:"",
    Confirmpwd:""})
    onsubmit=()=>{
        console.log(user)
        // clearform()
    }
    const handlechange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setuser(newUser);
      };
    // clearform=()=>{
    //     setuser({fname:"",
    //     lname:"",
    //     email:"",
    //     username:"",
    //     Enterpwd:"",
    //     Confirmpwd:""})
    // }
  return (
    <div>
       <h3>Register</h3>
        <form >
            <label>First name  </label>
            <input type="text" onChange={(e)=>handlechange(e)} value={user.fname} name='fname'/><br/>
            <label>Last name   </label>
            <input type="text" onChange={(e)=>handlechange(e)} value={user.lname} name="lname"/><br/>
            <label>email       </label>
            <input type="text" onChange={(e)=>handlechange(e)} value={user.email} name="email"/><br/>
            <label>Username    </label>
            <input type="text" onChange={(e)=>handlechange(e)} value={user.username} name="username"/><br/>
            <label>Enterpassword</label>
            <input type="password" onChange={(e)=>handlechange(e)} value={user.Enterpwd} name="Enterpwd"/><br/>
            <label>cnfm Password</label>
            <input type="password" onChange={(e)=>handlechange(e)} value={user.Confirmpwd} name="Confirmpwd"/><br/>
           <button type="button" onClick={onsubmit}>submit</button>
        </form>
    </div>
  )
}
