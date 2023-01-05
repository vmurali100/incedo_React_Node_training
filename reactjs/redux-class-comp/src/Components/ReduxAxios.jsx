import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
function ReduxAxios() {

    useEffect( ( )=> {

        axios.get( 'https://jsonplaceholder.typicode.com/users').then( res => {
            console.log( res.data )
        } )  

    } , [] )
  return (
    <div>


    </div>
  )
}

export default ReduxAxios