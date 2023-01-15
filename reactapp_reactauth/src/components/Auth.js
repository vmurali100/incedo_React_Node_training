import React, { useContext, useState } from 'react'

const UserContext = React.createContext();
export const AuthProvider = ({children})=>{

    const[users,setUsers] = useState(null)

    const login = (user)=>{
        setUsers(user);

        console.log(users)
    };

    const logout = ()=>{
        setUsers(null);
        console.log(users)
    };
    
    
    return ( <UserContext.Provider value={{users,login,logout}}>

     {children}

    </UserContext.Provider>
    )
}

export const AuthConsumer = ()=>{
    return useContext(UserContext)
}