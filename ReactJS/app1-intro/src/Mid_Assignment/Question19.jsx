import React from "react";

function Question19() {
  const itemList = ["Item1", "Item2", "Item3", "Item4", "Item5"];

  const renderList = itemList.map((item, index) => 
                               <div key={index}>{item}</div>
                             );
  return (
    <div className="app">
      <div>The List contains:</div>
      {renderList}
    </div>
  );
}

export default Question19;
