import React, { Component } from 'react'

export default class Form2 extends Component {
  constructor(props){
    super(props);

    this.state={
      fname:"",
      lname:"",
      email:"",
      username:"",
      password:"",
      cpassword:""
    };
  }

  handleChange=(e) => {
    console.log(e.target.name);
    var inputName = e.target.name;
    var newUser = {...this.state} // Creating a Copy of State and Storing in newUser
    newUser[inputName] = e.target.value
    this.setState(newUser);
  }

  register =() => {
    if(this.state.password === this.state.cpassword){
      alert("password matched");
      console.log(this.state);
      this.clearAll();
    }
    else{
      alert("Password not matched");
      this.clearAll();
    }
  }

  clearAll=() => {
    this.setState({
      fname:"",
      lname:"",
      email:"",
      username:"",
      password:"",
      cpassword:""
    }
    );
  }
  render() {
    return (
      <div>
        <form>
            <h1>WELCOME TO FORMS</h1>
            <h2>Register</h2>

            <label for="fname">First Name: </label>
            <input type="text" name="fname" value={this.state.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}></input> <br/> <br/>

            <label for="lname"> Last Name: </label>
            <input type="text" name="lname" value={this.state.lname}
            onChange={(e) => {
              this.handleChange(e);
            }}></input> <br/> <br/>

            <label for="email">Email: </label>
            <input type="text" name="email" value={this.state.email}
            onChange={(e) => {
              this.handleChange(e);
            }}></input> <br/> <br/>

            <label for="username">Username: </label>
            <input type="text" name="username" value={this.state.username}
            onChange={(e) => {
              this.handleChange(e);
            }}></input> <br/> <br/>

            <label for="password">Enter Password: </label>
            <input type="text" name="password" value={this.state.password}
            onChange={(e) => {
              this.handleChange(e);
            }}></input> <br/> <br/>

            <label for="cpassword">Confirm Password: </label>
            <input type="text" name="cpassword" value={this.state.cpassword}
            onChange={(e) => {
              this.handleChange(e);
            }}></input> <br/> <br/>

            <button onClick={this.register} type="button">Register</button>
        </form>
      </div>
    )
  }
}
