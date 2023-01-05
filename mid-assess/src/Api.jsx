import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";

const Api=()=>{
    const [user,setUser]=useState([])
const getUser=()=>{
        axios.post("http://localhost:3000",user).then(()=>{
            getAllUsers();
        })
const getAllUsers=()=>{
    axios.get("http://localhost:3000").then((response)=>{
        console.log(response)
        setUser(response.data)
    })
}
    }
    return(<div>
        <input type="text" name="name" value={user.name} placeholder="Name" /><br/>
        <input type="text" name="email" value={user.emai} placeholder="EMail"/><br/>
        <input type="number" name="phn" value={user.phn} placeholder="Phone" /><br/>
        <button type="submit" onClick={getUser}>Submit</button>
    </div>)
}
export default Api;