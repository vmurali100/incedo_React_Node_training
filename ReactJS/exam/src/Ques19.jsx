import React from 'react'

function Ques19() {

    const jsArray = ["Apple", "Mango", "Banana", "Kiwi", "Grapes", "Watermelon"];
    const newArray = jsArray.map((arrayitem) => <li>{arrayitem}</li>);

  return (
    <div>
        <h1>Ques 19</h1>
        <ul>{newArray}</ul>
    </div>
  )
}

export default Ques19