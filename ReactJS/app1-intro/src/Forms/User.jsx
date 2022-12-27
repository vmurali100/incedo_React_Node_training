import React, { Component } from "react";
import "./User.styles.css"
export default class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:"",
         lname:"",
         email:"",
         username:"",
         password:""
      }
    }
    
handleChange=(e)=>{
    console.log(e.target.name);
    var inputName = e.target.name
    var newUser = {...this.state} // Creating a Copy of State and Storing in newUser
    newUser[inputName] = e.target.value
    this.setState(newUser)
}

addUser=()=>{
  console.log(this.state)
  this.clearForm()
}

clearForm=()=>{
  this.setState({
    fname:"",
    lname:"",
    email:"",
    username:"",
    password:""
 })
}
  render() {
    return (
        <div>
        <div>
        </div>
      <div class="Form">
        <h1>Register</h1>
        <form >
          <label htmlFor="First Name">First Name : </label> <br />
          <input type="text" name="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}/> <br />
          <label htmlFor="Last Name">Last Name : </label> <br/>
          <input type="text" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <label htmlFor="Email">Email : </label> <br/>
          <input type="text" name="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <label htmlFor="Username">Username : </label> <br/>
          <input type="text" name="username" value={this.state.username} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <label htmlFor="Password">Enter Password: </label> <br/>
          <input type="password" name="Password"  onChange={(e)=>{this.handleChange(e)}} /> <br />
          <label htmlFor="CPassword">Confirm password: </label> <br/>
          <input type="password" name="cpassword" onChange={(e)=>{this.handleChange(e)}} /> <br />
          <input onClick={this.addUser} type="button" value="Register"/>
        </form>
      </div>
      </div>
    );
  }
}
