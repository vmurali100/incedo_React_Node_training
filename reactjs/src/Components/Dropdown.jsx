import React from 'react'
import { useState } from 'react'

const Dropdown = () => {
    const[data,setData] = useState(["kiwi"])
  return (
    <div>
        <label>Select Fruit</label>
        <select onChange={(e)=>{data=e.target.value}}>
            <option>{data}</option>
            <option value='1'>Apple</option>
            <option value='2'>Mango</option>

        </select>
    </div>
  )
}

export default Dropdown