import React,{useState} from 'react'
import { Funcform } from './Form'

import { useNavigate } from 'react-router-dom';
import axios from 'axios'


export const CreateUser = () => {
    const[user,setUser] = useState({fname:"",lname:"",email:""})
    const navigate = useNavigate()
    
    const handleChange = (e)=>{
       var name = e.target.name;
       var newuser = {...user};
       newuser[name] = e.target.value;
       setUser(newuser);
      //  console.log(newuser)
    }

    const handleSubmit = ()=>{
        
        axios.post("http://localhost:3000/user",user).then(()=>{
        // console.log("user added successfully")
        clearForm();
        navigate("/readuser")

        })
    };

    const clearForm = ()=>{
      setUser({fname:"",lname:"",email:""});
    }


  return (
    <div>
        <Funcform user={user} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}
