import React, { Component } from "react";
import { CSSProperties } from "react";
export default class Form extends Component {
    constructor(props) {
      super(props)

      this.state = {
         fname:"",
         lname:"",
         email:"",
         username:"",
         enterpassword:"",
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
    enterpassword:"",
    confirmpassword:""
 })
}
  render() {
    return (
      <div >
        <form style={{"align":"center","background-color":"green","marginTop":"50px","marginBottom":"50px","marginRight":"50px","marginLeft":"50px","alignItems":"center"}}>
          <label htmlFor="First Name">First Name</label>
          <br/>
          <input type="text" name="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}/> <br />
          <label htmlFor="Last Name">Last Name</label>
          <br/>
          <input type="text" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <label htmlFor="Email">Email</label>
          <br/>
          <input type="email" name="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <br/>
          <label htmlFor="Username">Username</label>
          <br/>
          <input type="text" name="username" value={this.state.username} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <br/>
          <label htmlFor="Enter Password">Enter Password</label>
          <br/>
          <input type="password" name="enterpassword" value={this.state.enterpassword} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <br/>
          <label htmlFor="Confirm Password">Confirm Password</label>
          <br/>
          <input type="password" name="confirmpassword" value={this.state.confirmpassword} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <br/>
          <a href="#">Back to Login</a>
          <br/>
          <button onClick={this.addUser} type="button">Register</button>
        </form>
      </div>
    );
  }
}