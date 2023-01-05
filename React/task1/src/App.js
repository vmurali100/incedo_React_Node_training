import { useState } from "react";
import {createContext} from 'react'
import React from 'react'
import User from "./User1";

const UserContext =createContext();


function App() {
  
    
      const [users ,setUsers] = useState(['Nishe','Niva','Supriya','Pranavi'])
      return (
        <UserContext.Provider value={users}>
        
        <h1>{`Hurrah ${user}`}</h1>
        <User />
        
        
        </UserContext.Provider>
        
       
      )

      
    
    

}

export default App;
