import React, { Component } from "react";

export default class User extends Component{
    constructor(props) {
        super(props)
      
        this.state = {
           fname:"",
           lname:"",
           company:""
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
            fname:"",
            lname:"",
            company:""
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
              <label htmlFor="email">Company : </label>
              <input type="text" name="company" onChange={(e)=>{this.handleChange(e)}} value={this.state.company}/> <br />
              <button onClick={this.addUser} type="button">REGISTER</button>
            </form>
          </div>
        );
      }
}
