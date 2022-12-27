import React, { Component } from 'react'

export default class RegistrationForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:"",
         lname:"",
         email:"",
         username:"",
         password1:"",
         password2:""     
        }
    }

    onInputChange=(e)=>{
        this.setState({...this.state,[e.target.name]:e.target.value});
    }
    handleShow=()=>{
        console.log(this.state);
    }
    
  render() {
    return (
      <div>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" onChange={(e)=>this.onInputChange(e)} value={this.state.fname}/><br />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" onChange={(e)=>this.onInputChange(e)} value={this.state.lname}/><br />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={(e)=>this.onInputChange(e)} value={this.state.email}/><br />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={(e)=>this.onInputChange(e)} value={this.state.username}/><br />
        <label htmlFor="password1">Enter Password</label>
        <input type="text" name="password1" onChange={(e)=>this.onInputChange(e)} value={this.state.password1}/><br />
        <label htmlFor="password2">Confirm Password</label>
        <input type="text" name="password2" onChange={(e)=>this.onInputChange(e)} value={this.state.password2}/><br />
        <button type="button" onClick={this.handleShow}>submit</button>
      </div>
    )
  }
}
