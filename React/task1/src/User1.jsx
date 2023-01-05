import React from "react"
import { useState } from "react";
const User1  =({users}) =>{
return(
    <div>
        <h1>Hi from User.jsx</h1>
        <ul>
            {users.map((usr)=><li>{usr}</li>)}
            
        </ul>
        </div>
    
    
)}

export default User1