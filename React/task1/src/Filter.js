import React, { useState } from "react";

const Filter = (props) => {
  const people = [
    { name: "Nishevidhaa"},
    { name: "Nivasini"}, 
    { name: "hariharasudan"},
    { name: "Harsha"}
  ];

  const [search, setNewSearch] = useState("");

  const OnChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? people
    : people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <>
      <h2>Filter</h2>
      Filter persons:{""}
      <input type="text" value={search} onChange={OnChange} />
      <h2>Filtering persons</h2>
      {filtered.map((person) => {
        return (
          <p key={person.id}>
            {person.name}
          </p>
        );
      })}
    </>
  );
};

export default Filter;