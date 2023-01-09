import React from 'react'
import { useState } from 'react';

function Ques18() {

    const [count, setCount] = useState(0);

  function increment() {
    setCount(count+1);
    return count;
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="App">
        <h1>Increment and Decrement counter</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Ques18;