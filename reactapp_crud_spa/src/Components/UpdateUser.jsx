import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Funcform } from './Form'


export const UpdateUser = () => {

  const [user,setUser] = useState({ fname:"",lname:"",email:""})
  const params = useParams()
  const navigate = useNavigate()
useEffect(()=>{
  axios.get("http://localhost:3000/user/"+params.id).then((response)=>{
    setUser(response.data)
  });
},[]);
  


  const handleChange = (e)=>{
    var name = e.target.name;
    var newuser = {...user};
    newuser[name] = e.target.value;
    setUser(newuser);
   //  console.log(newuser)
 };

 


 const confirmUpdate = () => {
  axios.put("http://localhost:3000/user/"+params.id, user).then(()=>{
    
  

  });
  navigate('/readuser')
    
  
};
  
  return (
    <div>
     <form>
            <label htmlFor="First Name">First Name</label>
            <br/>
            <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleChange(e)}}/> <br/> <br/>
            <label htmlFor="Last Name">Last Name</label><br/>
            <input type="text" name="lname" value={user.lname} onChange={(e)=>{handleChange(e)}}/><br/><br/>
            <label htmlFor="Email">Email</label><br/>
            <input type="email" name="email" value={user.email} onChange={(e)=>{handleChange(e)}}/><br/><br/>
            <button className="btn btn-primary" onClick={confirmUpdate}>Confirm Update</button>
      </form>
    </div>
  )
}

