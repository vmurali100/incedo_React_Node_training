import React from "react";
import { useState } from "react";

function SearchComp() {
  const [searchArray, setSearchArray] = useState([
    "Barcelona",
    "Chicago",
    "San Francisco",
    "Madrid",
    "France",
    "Munich",
    " Amsterdam",
  ]);

  const [copyArr, setCopyArr] = useState([]);

  const [searchTerm, setSearhSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearhSearchTerm(event.target.value);

    let newArr = searchArray.filter((word, i) => {
      return word.includes(event.target.value);
    });

    console.log(newArr);

    setCopyArr(newArr);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => handleChange(e)}
      />

      {copyArr.map((word, i) => {
        return <p key={i}> {word} </p>;
      })}
    </div>
  );
}

export default SearchComp;
