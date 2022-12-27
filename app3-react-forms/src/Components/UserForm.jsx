import React from "react";
import { useState } from "react";

const UserForm = () => {


  const [user, setUser] = useState({ fname: "", lname: "", email: "",username:"", password:""});

  const handleSubmit = () => {
    console.log(user);
    clearForm()
  };
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const clearForm=()=>{
    setUser({ fname: "", lname: "", email: "",username:"",password:""})
  }
  return (
    <div class="App-header">
      <form class="container-sm" >
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <br></br>
          <input
            type="text"
            className="form-control-lg"
            value={user.fname}
            name="fname"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control-lg"
            value={user.lname}
            name="lname"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control-lg"
            value={user.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control-lg"
            value={user.username}
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter password
          </label>
          <input
            type="text"
            className="form-control-lg"
            value={user.password}
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>        
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;