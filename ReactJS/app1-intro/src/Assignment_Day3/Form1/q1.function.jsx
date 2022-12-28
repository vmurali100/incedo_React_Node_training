import React from "react";
import { useState } from "react";

const UserForm = () => {

  const [user, setUser] = useState({ username:"",email:"",password:"",website:"",fname:"",lname:"",dpname:"",});
  const [users,setUsers] = useState([]);

  const handleSubmit = () => {
    console.log(user);
    let newUsers = [...users];
    newUsers.push(user);
    setUsers(newUsers)
    clearForm()
  };
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const clearForm=()=>{
    setUser({ username:"",
    email:"",
    password:"",
    website:"",
    fname:"",
    lname:"",
    dpname:"",})
  }
  return (
    <div>
        <h1>Registration Form</h1>
        <div className="row">
          <div className="col-3">
          <p>Select Registration type</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
          </div>
           <div className="col-4">
                <p>Trigger this action when</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label htmlFor="email">User Email</label>
            <input
            type="email"
            className="form-control"
            value={user.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          </div>
          <div className="col-4">
            <label htmlFor="uname">User Name</label>
            <input type="text" className="form-control" value={user.username} name="username" onChange={(e)=>{handleChange(e)}}/>
          </div>
        </div>
        <div className="col-4">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" value={user.password} name="password" onChange={(e)=>{handleChange(e)}}/>
        </div>
        <div className="row">
          <div className="col-3">
            <label htmlFor="fname">First Name</label>
            <input type="text" className="form-control" value={user.fname} name="fname" onChange={(e)=>{handleChange(e)}}/>
          </div>
          <div className="col-4">
            <label htmlFor="lname">Last Name</label>
            <input type="text" className="form-control" value={user.lname} name="lname" onChange={(e)=>{handleChange(e)}}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label htmlFor="dpname">Display Name</label>
            <input type="text" className="form-control" value={user.dpname} name="dpname" onChange={(e)=>{handleChange(e)}}/>
          </div>
          <div className="col-4">
            <label htmlFor="website">Website</label>
            <input type="text" className="form-control" value={user.website} name="website" onChange={(e)=>{handleChange(e)}}/>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
   
  );
};

export default UserForm;