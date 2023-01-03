import React from 'react'
import { useState } from 'react';

function Counter() {

    const [ val ,setVal] = useState(0);

 
    const handleInc = () => {
        setVal( ( prevVal  => {

            return prevVal+1;
        }))


    }

    const handleDec = ( )=> {
        setVal( ( prevVal => {

            return prevVal-1;
        }))
    }
  return (
    <div>
  
        <button  onClick={handleInc}> Increment  </button>
        <p> { val} </p>

        { val > 0 ?   
        <button      onClick={handleDec }>  Decrement </button>
       : 
       <button disabled> Decrement  </button>        
    }
    </div>
  )
}

export default Counter