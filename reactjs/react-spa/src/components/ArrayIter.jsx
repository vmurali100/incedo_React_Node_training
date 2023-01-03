import React from 'react'
import { useState } from 'react';

function ArrayIter() {

    const [ searchArray ,setSearchArray ] = useState( [  "Barcelona" , "Chicago" , "San Francisco",  "Madrid" , "France" , "Munich" , " Amsterdam"]);
    

  return (
    <div>
       
         <ul> 
             { searchArray.map( ( city , i ) => {

                return (
                    <li key={i}>  { city} </li>
                );
             })}
         </ul>

    </div>
  )
}

export default ArrayIter