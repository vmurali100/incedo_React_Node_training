import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

function AxiosComp() {

    const [ response ,setResponse]  = useState([]);

    useEffect( () => {

    
         axios.get( 'http://localhost:3000/users' ).then( res => {

         setResponse(res.data);
         })
     } , [] )
  return (


    <div> 
                { response.map( ( val , i ) => {

                    return (
                      <div> 
                        <p> { val.fname}</p>
                        <p>{val.lname}</p> 
                        <p> { val.username} </p>
                        <p>{val.email}</p>
                        <p> {val.bio}</p>
                      </div>
                        
                    );
                })}

    </div>
  )
}

export default AxiosComp