import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Task from './Task'

const Homepage = () => {
   // const [user, setUser] = useState({id:"", name:"", username:"", email: "", address: "", phone: "", website:"", company: ""})
    const [users, setUsers] = useState([])
    const [address, setAdress] = useState({});

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            response.data.forEach((user)=>{
                user.showAddress = false;
                user.showCompany = false;
            });
            setUsers(response.data)
        });
    },[])

    const ToggleAddress = (a) =>{
    console.log(a)
    let address = JSON.stringify(a.address);
    console.log("newadress", address)
    setAdress(address);
    console.log("adress is", address)
  
    }

    const ToggleCompany = (user) =>{
    console.log("clicked2")
    }
  
    return (
    <div>
    <Task address={address} users={users} ToggleAddress={ToggleAddress} ToggleCompany={ToggleCompany}/>
    </div>
  )
}

export default Homepage