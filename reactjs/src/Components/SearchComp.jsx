import React from 'react'
import { useState } from 'react';

const SearchComp = () => {

   
    const[fruits, setFruits] = useState(["apple", "mango", "banana"])
    const [copy, setCopy] = useState(false)
    const [newFruits, setNewFruits] = useState([])
    
    const handlefilter = (e)=>{
    setCopy(true);
    let newFruits = [...fruits];
    console.log("entered value", e.target.value)
    let filtered = newFruits.filter((frt)=>frt.includes(e.target.value))
    setNewFruits(filtered)
    }


  return (
    <div>
    <br/>
    <input type="search" placeholder='search item' onChange={(e)=>{handlefilter(e)}}></input>
    {copy ? <>{newFruits.map((f,i)=>{
    return (
      <p key={i}>{f} </p>
    )
    }
    )
}</> : <>{fruits.map((fr,i)=>{
  return (
    <p key={i}>{fr}</p>
  )
})}</>
} 
    </div>
  )
}

export default SearchComp