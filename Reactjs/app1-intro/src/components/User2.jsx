import React, { Component } from 'react'
import { useState } from 'react';

const App = () => {
    const [user, setUser] = useState({ fname : "",
    lname: "",
    email: "",
    username: "",
    pwd: "",
    cpwd:""});

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
      setUser({fname : "",
      lname: "",
      email: "",
      username: "",
      pwd: "",
      cpwd:"" })
    }
    return (
      <div>
        <form>
          <h3>Register</h3>
        <div class="mb-4">
          <label htmlFor="First Name" class = "form-label">First Name : </label>
          <input type="text" name="fname" class= "form-control" onChange={(e)=>{handleChange(e)}} value={user.fname}/> 
        </div>
        <div class="mb-4">
          <label htmlFor="Last Name" class = "form-label">Last Name : </label>
          <input type="text" name="lname" class= "form-control" value={user.lname} onChange={(e)=>{this.handleChange(e)}} />
        </div>
        <div class = "mb-4">
          <label htmlFor="Email" class = "form-label">Email : </label>
          <input type="email" name="email" class= "form-control" value={user.email} onChange={(e)=>{this.handleChange(e)}}  aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class = "mb-4">
          <label htmlFor="Username" class = "form-label">Username : </label>
          <input type="text" name="username" class= "form-control" value={user.username} onChange={(e)=>{handleChange(e)}} />
        </div>
        <div class = "mb-4">
          <label htmlFor="Password" class = "form-label">Password : </label>
          <input type="password" name="pwd" class= "form-control" value={user.pwd} onChange={(e)=>{handleChange(e)}} /> 
        </div>
        <div class = "mb-4">
          <label htmlFor="Confirm Password" class = "form-label">Confirm Password : </label>
          <input type="password" name="cpwd" class= "form-control" value={user.cpwd} onChange={(e)=>{handleChange(e)}} /> <br />
        </div>
        <button type = "button" onClick={handleSubmit} class=" btn btn-primary">Submit</button>
       
        </form>
      </div>
    )
  }

