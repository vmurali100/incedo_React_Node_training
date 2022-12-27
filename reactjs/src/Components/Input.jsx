import React, { Component } from 'react'

export default class Input extends Component {
    constructor(){

    super();
    this.state = {
    fname: " ",
    lname: " ",
    email: ' ',
    username: " ",
    password: " ",
    confirmPass: " ",
    }
    }

    handleChange=(e)=>{
    var inputName = e.target.name;
    var newUser = {...this.state}; // Creating a Copy of State and Storing in newUser
    newUser[inputName] = e.target.value;
    this.setState(newUser);
    }

    addUser=()=>{
        console.log(this.state)
        this.clearForm()
      }
      
      clearForm=()=>{
        this.setState({
            fname: " ",
            lname: " ",
            email: ' ',
            username: " ",
            password: " ",
            confirmPass: " ",
       })}

  render() {
    return (
      <div>
        <form>
            <h1>Register</h1><br/>
            <label>First name : </label>
            <input type="text" name="fname" onChange={(e)=>this.handleChange(e)} value={this.state.fname}></input> <br/><br/>
            <label>Last Name : </label>
            <input type="text" name="lname" onChange={(e)=>this.handleChange(e)} value={this.state.lname}></input> <br/><br/>
            <label>Email : </label>
            <input type="text" name="email" onChange={(e)=>this.handleChange(e)} value={this.state.email}></input><br/><br/>
            <label>Username : </label>
            <input type="text" name="username" onChange={(e)=>this.handleChange(e)} value={this.state.username}></input><br/><br/>
            <label>Enter Password : </label>
            <input type="text" name="password" onChange={(e)=>this.handleChange(e)} value={this.state.password}></input><br/><br/>
            <label>Confirm Password : </label>
            <input type="text" name="confirmPass" onChange={(e)=>this.handleChange(e)} value={this.state.confirmPass}></input><br/><br/>
            <button type="button" onClick={this.addUser}>Register</button>
        </form>
      </div>
    );
  }
}
