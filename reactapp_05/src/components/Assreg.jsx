import React,{useState} from 'react'
import axios from 'axios'
import { AssTable } from './AssTable'

export const Assreg = () => {
    // const[user,setUser] = useState({id:"",name:"",username:"",email:"",address:"",phone:"",website:"",company:""})
    const[users,setUsers] =  useState([])
    const[address,setAddress] = useState({})
    // const[editIndex,setEditIndex] = useState(false);
    
   


    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        
        setUsers(response.data)
        // console.log(response.data)
        response.data.forEach((user)=>{
            user.showaddress = false;

        })

        

    })

    const getUserAddress = (val,i)=>{
        // var newaddress = users.map(function(user){
        //     return user.address;
        // });
        
     let allUsers = [...users];
     allUsers.forEach((usr)=>{
        if(val.id === usr.id){
            usr.showaddress = !usr.showaddress
        }
     })
        setUsers(allUsers)
        // console.log(newaddress)
       

  }

  const closeUserAddress = ()=>{
   


  }


  return (
    <div>

    <AssTable users={users} getUserAddress={getUserAddress} address={address} closeUserAddress={closeUserAddress}   />

    </div>
  )
}

