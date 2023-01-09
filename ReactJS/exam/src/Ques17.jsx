import React from 'react'
import { useState } from 'react'

function Ques17() {

    const [search, setSearch] = useState([
        "Apple", "Mango", "Banana", "Kiwi", "Grapes", "Watermelon"
    ]);

    const [Arr, setArr] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
  
      let newArr = search.filter((word, i) => {
        return word.includes(event.target.value);
      });
  
      console.log(newArr);
      setArr(newArr);
    };
  

  return (
    <div>
        <h1>Search Filter</h1>
        <input 
            type = "search"
            placeholder='search'
            onChange={(e) => {handleChange(e)}}
        />

        {Arr.map((word, i) => {
        return <p key={i}> {word} </p>;
      })}

    </div>
  )
}

export default Ques17