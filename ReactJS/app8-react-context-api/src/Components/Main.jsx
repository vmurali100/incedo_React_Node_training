import React from "react";
import Parent from "./Parent";

const Main = ({users}) => {
  return (
    <div>
      <h2>Welcome to Main Component !!!</h2>
      <hr />
      <Parent users={users}/>
    </div>
  );
};

export default Main;