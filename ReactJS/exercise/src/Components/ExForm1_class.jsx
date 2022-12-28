import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class ExForm1_class extends Component {
  constructor(props){
    super(props);

    this.state = {
      fname:"",
      lname:"",
      username:"",
      email:"",
      password:"",
      bio:""
    };
  }

  handleChange=(e)=>{
    console.log(e.target.name);
    var inputName = e.target.name
    var newUser = {...this.state} // Creating a Copy of State and Storing in newUser
    newUser[inputName] = e.target.value
    this.setState(newUser)
  }

  register = () => {
    console.log(this.state);
    this.clearForm();
  }

  clearForm = () => {
    this.setState ({
      fname:"",
      lname:"",
      username:"",
      email:"",
      password:"",
      bio:""
    })
  }

  render() {
    return (
      <div>
        <h1> Register </h1>
        <form>
            <label for="fname">First name: </label>
            <input type="text" name="fname" value={this.state.fname}
            onChange = {(e) => {this.handleChange(e)}}></input> &nbsp; &nbsp;    

            <label for="lname">Last name: </label>
            <input type="text" name="lname" value={this.state.lname}
            onChange = {(e) => {this.handleChange(e)}}></input> <br/> <br/>

            <label for="username">Username: </label> <br/>
            <input type="text" name="username" value={this.state.username}
            onChange = {(e) => {this.handleChange(e)}}></input> <br/> <br/>

            <label for="username">Email: </label> <br/>
            <input type="text" name="email" value={this.state.email}
            onChange = {(e) => {this.handleChange(e)}}></input> <br/> <br/>

            <label for="password">Password: </label> <br/>
            <input type="text" name="password" value={this.state.password}
            onChange = {(e) => {this.handleChange(e)}}></input> <br/> <br/>

            <label for="bio">Write a short bio: </label> <br/>
            <input type="textarea" name="bio" value={this.state.bio}
            onChange = {(e) => {this.handleChange(e)}}></input> <br/>
            {"Write a short bio about yourself"} <br/> <br/>

            <Button variant="contained" color='error' onClick={this.register}> Submit </Button>

        </form>
      </div>
    )
  }
}

