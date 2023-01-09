import React, { createContext, useState } from 'react'


export var loginFormContext = createContext();

function AuthProvider({children}) {

      
    const [name, setname] = useState(null);

    const login = ( username ) => {

              setname( username );
    }    

    const logout = () => {
        setname(null);
    }
      
  return (
       
        <loginFormContext.Provider value={{ name , login , logout  }}>
        { children}
        </loginFormContext.Provider>
    
  )
}

export default AuthProvider