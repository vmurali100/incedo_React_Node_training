import React,{Component} from 'react';
import {useState,useContext} from 'react';


const UserContext = React.createContext();

export const AuthContext = ({children})=>
{
    console.log("AuthContext");
    const [user,setUser] = useState(null);

    const login = (username)=>{
        console.log(username)
        setUser(username);
    };

    const logout = ()=>{
        console.log("inside logout");
        setUser(null);
    };

    return (<UserContext.Provider value={{user,login,logout}}>
             {children}
           </UserContext.Provider>);
};

export const useCustomAuth = ()=>{
    return useContext(UserContext)
};
