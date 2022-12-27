import { Component } from "react";

export class User extends Component{
    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
            email:"",
            username:"",
            password:"",
            conformpassword:""
        }
    }
    handleChange=(e)=>{
        console.log(e.target.name);
        var inputName = e.target.name
        var newUser = {...this.state} // Creating a Copy of State and Storing in newUser
        newUser[inputName] = e.target.value
        this.setState(newUser)
    }
    
    Register=()=>{
      console.log(this.state)
      this.clearForm()
    }
    
    clearForm=()=>{
      this.setState({
        fname:"",
        lname:"",
        email:"",
        username:"",
        password:"",
        conformpassword:""
     })
    }
    render(){
        return(
            <form>
                <label htmlFor="First Name">First Name :</label><br/>
                <div style={{display:"inline-block"}}>
                <input type="text" name="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}></input><br/>
                <label htmlFor="Last Name">Last Name :</label><br/>
                <input type="text" name="lname" onChange={(e)=>{this.handleChange(e)}} value={this.state.lname}></input><br/>
                <label htmlFor="Email">Email :</label><br/>
                <input type="text" name="email" onChange={(e)=>{this.handleChange(e)}} value={this.state.email}></input><br/>
                <label htmlFor="Username">Username :</label><br/>
                <input type="text" name="username" onChange={(e)=>{this.handleChange(e)}} value={this.state.username}></input><br/>
                <label htmlFor="password">Enter Password :</label><br/>
                <input type="text" name="password" onChange={(e)=>{this.handleChange(e)}} value={this.state.password}></input><br/>
                <label htmlFor="conformpassword">Confirm password :</label><br/>
                <input type="text" name="conformpassword" onChange={(e)=>{this.handleChange(e)}} value={this.state.conformpassword}></input><br/>
                <button onClick={this.Register} type="button">Register</button>
                </div>
                <br/>
            </form>
        )
    }
}