import React from 'react'
import { useContext } from 'react'
import { loginFormContext } from './AuthProvider'
import { useNavigate } from 'react-router-dom';

function Features() {


    let navigate = useNavigate();
    const { name , logout } = useContext( loginFormContext );

    const handleLogout = () => {
   
           logout();
           navigate("/login");

    }

    if( !name ) 
    {

        return (
            <div>
                   <h1> Go to login page </h1>
                   <button onClick={()  => navigate('/login') }> Go to login </button>
            </div>
          )

    }

    else {

        return (

            <div>
                      {name}

                      <button onClick={ handleLogout}> Log out</button>
             </div>
        )
    }
    
 
}

export default Features