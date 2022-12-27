import { useState } from "react";
import { Fragment } from "react";
const startState={
    fname:"",
    lname:"",
    email:"",
    username:"",
    pass:"",
    cpass:"",
}
function FunctionalForms()
{
   const [user,setUser]=useState({...startState});
  
    const handleChange=(e)=>
    {
        const name=e.target.name;
        const newState={...user};
        newState[name]=e.target.value;
        setUser(newState);
    }
    const handleClick=function()
    {
        setUser(startState);
    }
    return <Fragment>
        <h1>Functional Components</h1>
            <form>
            <label for="fname">First Name : </label>
      <input type="text" name="fname" id="fname"  value={user.fname} onChange={(e)=>handleChange(e)}/> <br />
      <br />
     
            <label for="lname">Last Name : </label>
      <input type="text" name="lname" id="lname"  value={user.lname} onChange={(e)=>handleChange(e)}/> <br />
      <br />
      <label for="email">Email :</label>
      <input type="text" name="email" id="email"  value={user.email} onChange={(e)=>handleChange(e)}/> <br />
      <br />
      <label for="username">Username:</label>
      <input type="text" name="username" id="username"  value={user.username} onChange={(e)=>handleChange(e)}/> <br />
      <br />
      <label for="pass">Password :</label>
      <input type="password" name="pass" id="pass"  value={user.pass} onChange={(e)=>handleChange(e)}/> <br />
      <br />
      <label for="cpass">Confirm Password :</label>
      <input type="password" name="cpass" id="cpass"  value={user.cpass} onChange={(e)=>handleChange(e)}/> <br />
      <br />
    
      <button onClick={handleClick} >Register</button>
            </form>
        </Fragment>
    
}
export default FunctionalForms;