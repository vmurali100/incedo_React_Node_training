import React, { Component } from 'react'
import ButtonAppBar from './Appbar'
import { Button } from '@mui/material'

export default class ExForm2_class extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          fname:"",
          lname:"",
          username:"",
          email:"",
          cemail:"",
          password:"",
          cpassword:""
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
        if(this.state.email === this.state.cemail & this.state.password === this.state.cpassword){
            console.log(this.state);
        this.clearForm();
        }
        else {
            alert("Email or password does not match");
            this.clearForm();
        }
        
      }
    
      clearForm = () => {
        this.setState ({
            fname:"",
            lname:"",
            username:"",
            email:"",
            cemail:"",
            password:"",
            cpassword:""
        })
      }

  render() {
    return (
      <div>
        <ButtonAppBar/>
        <form>
            <br/> <br/>
            <label for="fname">First name: </label>
            <input type="text" name="fname" value={this.state.fname}
            onChange = {(e) => {this.handleChange(e)}}></input> &nbsp; &nbsp;    

            <label for="lname">Last name: </label>
            <input type="text" name="lname" value={this.state.lname}
            onChange = {(e) => {this.handleChange(e)}}></input> <br/> <br/>

            <label for="username">Username: </label> <br/>
            <input type="text" name="username" value={this.state.username}
            onChange = {(e) => {this.handleChange(e)}}></input> <br/> <br/>

            <label for="email">Email: </label>
            <input type="text" name="email" value={this.state.email}
            onChange = {(e) => {this.handleChange(e)}}></input> &nbsp; &nbsp;

            <label for="cemail">Confirm Email: </label>
            <input type="text" name="cemail" value={this.state.cemail}
            onChange = {(e) => {this.handleChange(e)}}></input> <br/> <br/>

            <label for="password">Password: </label>
            <input type="text" name="password" value={this.state.password}
            onChange = {(e) => {this.handleChange(e)}}></input> &nbsp; &nbsp;

            <label for="cpassword">Confirm Password: </label>
            <input type="text" name="cpassword" value={this.state.cpassword}
            onChange = {(e) => {this.handleChange(e)}}></input> <br/> <br/>

            <Button variant="contained"  onClick={this.register}> Submit </Button>

        </form>
      </div>
    )
  }
}
