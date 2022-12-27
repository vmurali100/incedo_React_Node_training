import React, { Component } from 'react'
import { useState } from 'react';
const Boot = () => {

  const [user, setUser] = useState({fname:"",lname:"",email:"",username:"",password:"",cpassword:""});

  const handleSubmit = () => {
    console.log(user);
    clearForm();
  };

  const handleChange = (e) => {
    let newUser = {...user};
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const clearForm = () => {
    setUser({fname:"",lname:"",email:"",username:"",password:"",cpassword:""})
  }

  return (
    <div>
      <h1>Form using functional component</h1>
      <form>
          <label htmlFor="fname">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.fname}
            name="fname"
            onChange={(e) => {
              handleChange(e);
            }}
          /> <br/> <br/>

          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            value={user.lname}
            name="lname"
            onChange={(e) => {
              handleChange(e);
            }}
          /> <br/> <br/>

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            value={user.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          /> <br/> <br/>

          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            value={user.username}
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
          /> <br/> <br/>

          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            value={user.fname}
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
          /> <br/> <br/>

          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            value={user.cpassword}
            name="cpassword"
            onChange={(e) => {
              handleChange(e);
            }}
          /> <br/> <br/>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Boot;