import { useState } from "react";
import { useEffect } from "react";
import Table from "./Table"
import axios from "axios" 
const Parent = () =>{
    const [users,setUsers]=useState([])  
    const [address,setAddress]=useState("")  
    const getAllUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
    }
    
    useEffect(()=>{
        getAllUsers()
      },[])

    const getAddress=(user)=>{
        axios.get("https://jsonplaceholder.typicode.com/users/"+user.id).then((response)=>{
            console.log("address is",response.data)
            setAddress(JSON.stringify(response.data.address))
        })
    }
    return(
        <div>
        <Table
        users={users}
        getAddress={getAddress}
        address={address}
        />
    </div>
    )
    
}
export default Parent