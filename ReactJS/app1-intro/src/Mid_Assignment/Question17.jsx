import React from "react";
import { useState } from "react";
function Question17() {
  const names= ["Item1", "Item2", "Item3", "Item4", "Item5"];
  const [search,setSearch]=useState("");
  const handleChange=(e)=>{
    var newsearch=search;
    newsearch=e.target.value;
    setSearch(newsearch);
    console.log(newsearch);
  }
  return (
    <div>
        <label>Enter item to be search</label> <br></br>
        <input type="text" onChange={(e)=>{handleChange(e)}} value={search}/>
       
      {names.filter(name => name.includes(search)).map((filteredName)=> (
              filteredName
        ))}
    </div>

  );
}

export default Question17;