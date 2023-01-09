import React from 'react'
import { useState } from 'react';

function Check01() {

    const [items, setItems] = useState(["apple","banana","pineapple","cherry","mango"]);

    // const [searchTerm, setSearchTerm] = useState("");

    const [array, setarray] = useState([]);

    const handleChange = (event) => {
        // setSearchTerm(event.target.value);

        let newArray = items.filter((word) => {
            return word.includes(event.target.value);
        })

        setarray(newArray);
        
    }


  return (
    <div>
        <input
            type = "text"
            placeholder="Search"
            onChange={(e) => handleChange(e)}
            >
        </input>
        {items.map((itemw) => <li>{itemw}</li>)}
        Filtered:
        {array.map((item) => <li>{item}</li>)}
    </div>
  )
}

export default Check01