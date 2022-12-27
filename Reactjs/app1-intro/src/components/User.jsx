import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();
        this.state = {
            fname : "",
            lname: "",
            email: "",
            username: "",
            pwd: "",
            cpwd:""


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
        fname : "",
        lname: "",
        email: "",
        username: "",
        pwd: "",
        cpwd:""
     })
    }
  render() {
    return (
      <div>
        <form>
          <h3>Register</h3>
        <div class="mb-1">
          <label htmlFor="First Name" class = "form-label">First Name : </label>
          <input type="text" name="fname" class= "form-control" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}/> 
        </div>
        <div class="mb-1">
          <label htmlFor="Last Name" class = "form-label">Last Name : </label>
          <input type="text" name="lname" class= "form-control" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} />
        </div>
        <div class = "mb-1">
          <label htmlFor="Email" class = "form-label">Email : </label>
          <input type="email" name="email" class= "form-control" value={this.state.email} onChange={(e)=>{this.handleChange(e)}}  aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class = "mb-1">
          <label htmlFor="Username" class = "form-label">Username : </label>
          <input type="text" name="username" class= "form-control" value={this.state.username} onChange={(e)=>{this.handleChange(e)}} />
        </div>
        <div class = "mb-1">
          <label htmlFor="Password" class = "form-label">Password : </label>
          <input type="password" name="pwd" class= "form-control" value={this.state.pwd} onChange={(e)=>{this.handleChange(e)}} /> 
        </div>
        <div class = "mb-1">
          <label htmlFor="Confirm Password" class = "form-label">Confirm Password : </label>
          <input type="password" name="cpwd" class= "form-control" value={this.state.cpwd} onChange={(e)=>{this.handleChange(e)}} /> <br />
        </div>
        <button type = "button" onClick={this.addUser} class=" btn btn-primary">Submit</button>
       
        </form>
      </div>
    )
  }
}
