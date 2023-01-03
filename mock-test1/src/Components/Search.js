import React  from "react";
import { useState } from 'react'
let students = ["Anil","BOB"];

function Search() {
    const [search, setSearch] = useState([
        "Adam", "Bob", "Charlie", "Dave", "John"
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
export default Search
