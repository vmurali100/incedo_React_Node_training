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
            <UserTable/>
        </div>
       
      </div>
      {/* <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default Registration;
