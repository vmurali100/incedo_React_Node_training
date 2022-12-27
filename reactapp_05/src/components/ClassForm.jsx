import React, { Component } from "react";

export default class ClassForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:"",
         lname:"",
         Email:"",
         Username:"",
         Enterpassword:"",
         Confirmpassword:""
      }
    }
    
handleChange=(e)=>{
    //console.log(e.target.name);
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
    Email:"",
    Username:"",
    Enterpassword:"",
    Confirmpassword:""

 })
}
  render() {
    return (
      <div className="App-container">
        <form>
          <label htmlFor="First Name">First Name : </label>
          <input type="text" name="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}/> <br />
          <label htmlFor="Last Name">Last Name : </label>
          <input type="text" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} /> <br />
          <label htmlFor="Email">Email : </label>
          <input type="email" name="Email" onChange={(e)=>{this.handleChange(e)}} value={this.state.Email}/> <br />
          <label htmlFor="User Name">User Name : </label>
          <input type="text" name="Username" onChange={(e)=>{this.handleChange(e)}} value={this.state.Username}/> <br />
          <label htmlFor="Enter Password">Enter Password : </label>
          <input type="password" name="Enterpassword" onChange={(e)=>{this.handleChange(e)}} value={this.state.Enterpassword}/> <br />
          <label htmlFor="Confirm Password">Confirm Password : </label>
          <input type="password" name="Confirmpassword" onChange={(e)=>{this.handleChange(e)}} value={this.state.Confirmpassword}/> <br />
          <button onClick={this.addUser} type="button">Register</button>
          {/* <link>Back to Login</link> */}
        </form>
      </div>
    );
  }
}