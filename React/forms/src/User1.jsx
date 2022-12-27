import React, { Component } from "react";

export default class User1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:"",
         lname:"",
         email:"",
         username:"",
         password:"",
         confirmpassword:""
      }
    }
    
handleChange=(e)=>{
    console.log(e.target.name);
    var inputName = e.target.name
    var newUser = {...this.state} // Creating a Copy of State and Storing in newUser
    newUser[inputName] = e.target.value
    this.setState(newUser)
    
  
}

registerUser=()=>{
  console.log(this.state)
  const { password, confirmpassword } = this.state;
      // perform all neccassary validations
      if (password !== confirmpassword) {
          alert("Passwords don't match");
      } else {
          // make API call
      }
  this.clearForm()
  
}

clearForm=()=>{
  this.setState({
    fname:"",
    lname:"",
    email:"",
    username:"",
    password:"",
    confirmpassword:""
 })
}
  render() {
    return (
      <div>
        <form>
          <label htmlFor="First Name">First Name : </label>
          <input type="text" name="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}/> <br />
          <label htmlFor="Last Name">Last Name : </label>
          <input type="text" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <label htmlFor="email">Email Id : </label>
          <input type="text" name="email" onChange={(e)=>{this.handleChange(e)}} value={this.state.email}/> <br />
          <label htmlFor="username">User Name : </label>
          <input type="text" name="username" onChange={(e)=>{this.handleChange(e)}} value={this.state.username}/> <br />
          <label htmlFor="password">Password : </label>
          <input type="passowrd" name="password" onChange={(e)=>{this.handleChange(e)}} value={this.state.password}/> <br />
          <label htmlFor="confirmpassword">Confirm Password : </label>
          <input type="password" name="confirmpassword" onChange={(e)=>{this.handleChange(e)}} value={this.state.confirmpassword}/> <br />
          <button onClick={this.registerUser} type="button">Register User</button>
        </form>
      </div>
    );
  }
}