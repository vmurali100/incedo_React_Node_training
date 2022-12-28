import React, { Component } from "react";
import './Form1.css';

export default class Form2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:"",
         lname:"",
         username:"",
         email:"",
         phone:"",
         password:"",
         shortbio:""
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

  const { password,Length } = this.state;
      // perform all neccassary validations
      if (password == Length==0) {
          alert("Set password min of 8 char");
      } else {
          // make API call
      }
  this.clearForm()
  
}

clearForm=()=>{
  this.setState({
    fname:"",
    lname:"",
    username:"",
    email:"",
    password:"",
    shortbio:""
 })
}
  render() {
    return (
      <div>
        <form>
            <center>
          
            <div className="mb-3">
          <label htmlFor="First Name">First Name : </label>
          <input type="text" className="form-label" placeholder ="Enter your first name" name="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}/> 
          
          <label htmlFor="Last Name">Last Name : </label>
          <input type="text" className="form-label" placeholder ="Enter your last name" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} /> <br /></div>
          <div className="grid-container">
          <label htmlFor="username">User Name : </label>
          <input type="text" placeholder ="Enter your user name" name="username" onChange={(e)=>{this.handleChange(e)}} value={this.state.username}/> <br /></div>
          <label htmlFor="email">Email Id : </label>
          <input type="text" placeholder ="Enter your email ID" name="email" onChange={(e)=>{this.handleChange(e)}} value={this.state.email}/> <br />
          <label htmlFor="phone">Phone Number : </label>
         
          <input type="passoword" placeholder ="Set your password with min of 8 char" name="password" onChange={(e)=>{this.handleChange(e)}} value={this.state.shortbio}/> <br />
          <label htmlFor="shortbio">Short Bio : </label>
          <input type="text" placeholder ="Lets know about you" name="Short" onChange={(e)=>{this.handleChange(e)}} value={this.state.shortbio}/> <br />
          <button className ="UI" onClick={this.registerUser} type="button">Submit</button>
          </center>
        </form>
      </div>
    );
  }
}