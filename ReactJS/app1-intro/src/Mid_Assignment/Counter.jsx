import React, { useState } from "react";



function Counter() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="Counter">
      <button className="btn btn-primary" onClick={incrementCount}>Click Here</button>
      {count}
    </div>
  );
}

export default Counter;
