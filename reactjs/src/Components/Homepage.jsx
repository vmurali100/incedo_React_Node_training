import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Task from './Task'

const Homepage = () => {
   // const [user, setUser] = useState({id:"", name:"", username:"", email: "", address: "", phone: "", website:"", company: ""})
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            response.data.forEach((user)=>{
                user.showAddress = false;
                user.showCompany = false;
            });
            setUsers(response.data)
        });
    },[])

    const ToggleAddress = (user) =>{
    console.log("clicked1")

    }

    const ToggleCompany = (user) =>{
    console.log("clicked2")
    }
  
    return (
    <div>
    <Task users={users} ToggleAddress={ToggleAddress} ToggleCompany={ToggleCompany}/>
    </div>
  )
}

export default Homepage