import React, { Component } from "react";

export default class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:"",
         lname:""
      }
    }
    
handleChange=(e)=>{
    // console.log(e.target.name);
    var inputName = e.target.name;
    var newUser = {...this.state}; // Creating a Copy of State and Storing in newUser
    newUser[inputName] = e.target.value;
    this.setState(newUser);
    // this.setState({...this.state,[e.target.name]:e.target.value})
}

addUser=()=>{
  console.log(this.state)
  this.clearForm()
}

clearForm=()=>{
  this.setState({
    fname:"",
    lname:""
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
          <button onClick={this.addUser} type="button">Add User</button>
        </form>
      </div>
    );
  }
}