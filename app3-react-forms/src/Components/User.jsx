import React, { Component } from "react";

export default class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:"",
         lname:"",
         Email:"",
         Username:"",
         Password:""
      }
    }
    
handleChange=(e)=>{
    console.log(e.target.name);
    var inputName = e.target.name
    var newUser = {...this.state} 
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
    Email:"",
    Username:"",
    Password:""
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
          <label htmlFor="Email">Email : </label>
          <input type="text" name="Email" value={this.state.Email} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <label htmlFor="Username">Username : </label>
          <input type="text" name="Username" value={this.state.Username} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <label htmlFor="Password">Password : </label>
          <input type="text" name="Password" value={this.state.Password} onChange={(e)=>{this.handleChange(e)}} /> <br />  

          <button onClick={this.addUser} type="button">Add User</button>
        </form>
      </div>
    );
  }
}