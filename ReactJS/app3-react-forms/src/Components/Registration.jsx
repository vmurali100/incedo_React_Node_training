import React, { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const Registration = () => {
  const [user, setUser] = useState({ fname: "", lname: "", email: "" });
  const [users,setUsers] = useState([])

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = () => {
    console.log(user);
    let newUsers = [...users];
    newUsers.push(user);
    setUsers(newUsers)
    clearForm();
  };

  const clearForm = () => {
    setUser({ fname: "", lname: "", email: "" });
  };

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <UserForm
            user={user}
            setUser={setUser}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            clearForm={clearForm}
          />
        </div>
        <div className="col-8">
          <UserTable users={users} />
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
