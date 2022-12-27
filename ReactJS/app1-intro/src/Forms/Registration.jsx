import React from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const Registration = () => {
  return (
    <div>
      {/* <h2>Hello from Registration</h2> */}
      <div className="row">
        <div className="col-4">
            <UserForm/>
        </div>
        <div className="col-8">
        </div>
       
      </div>
     
    </div>
  );
};

export default Registration;