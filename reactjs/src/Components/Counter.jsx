import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [no, setNo] = useState(0);
   
    const handleAdd = ()=>{
    setNo(no+1)
    }

    const handleSub = ()=>{
    setNo(no-1)
    }

  return (
    <div>
    <h1>{no}</h1>
    <br />
    <button onClick={()=>{handleAdd()}}>+</button> <button onClick={()=>{handleSub()}}>-</button>
    </div>
  )
}

export default Counter