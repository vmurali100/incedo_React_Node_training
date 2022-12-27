import React, { Component } from "react";

export default class User extends Component{
    constructor(props) {
        super(props)
      
        this.state = {
           fname:"",
           lname:"",
           email:"",
           username:"",
           passwd:"",
           c_passwd:""
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
          passwd:"",
          c_passwd:""
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
              <label htmlFor="email">E-mail : </label>
              <input type="text" name="email" onChange={(e)=>{this.handleChange(e)}} value={this.state.email}/> <br />
              <label htmlFor="username">Username : </label>
              <input type="text" name="username" onChange={(e)=>{this.handleChange(e)}} value={this.state.username}/> <br />
              <label htmlFor="passwd">Enter Password : </label>
              <input type="text" name="passwd" onChange={(e)=>{this.handleChange(e)}} value={this.state.passwd}/> <br />
              <label htmlFor="c_passwd">Confirm Password : </label>
              <input type="text" name="c_passwd" onChange={(e)=>{this.handleChange(e)}} value={this.state.c_passwd}/> <br />
              <button onClick={this.addUser} type="button">REGISTER</button>
            </form>
          </div>
        );
      }
}