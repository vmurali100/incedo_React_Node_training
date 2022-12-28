import React, { useState } from "react";   
export default class Class_User1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:"",
            lname:"",
            
            username:"",
            email:"",
            password:"",
            bio:""
        }}
        handleChange(e){
            var inputName=e.target.name
            //copy of the state
            var newUser={...this.state}
            newUser[inputName]=e.target.value
            this.setState(newUser)
        }
    Submit=()=>{
        console.log(this.state)
        this.setState({fname:"" ,lname:"",username:"",email:"",password:"",bio:""})
    }
    render(){
    return(
        <div>
            <h2>Register</h2>
            <form>
                <label>First Name</label><br/>
                <input type="text" name="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}/><br/><br/>
                <label>Last Name</label><br/>
                <input type="text" name="lname" onChange={(e)=>{this.handleChange(e)}} value={this.state.lname}/><br/><br/>
                <label >Username:</label><br/>
                <input type="text" name="username" onChange={(e)=>{this.handleChange(e)}} value={this.state.username}/><br/><br/>
                <label >Email:</label><br/>
                <input type="text" name="email" onChange={(e)=>{this.handleChange(e)}} value={this.state.email}/><br/><br/>
                <label >Password:</label><br/>
                <input type="password" name="password" onChange={(e)=>{this.handleChange(e)}} value={this.state.password}/><br/><br/>
                <label >Short Bio</label><br/>
                <textarea name="bio"  onChange={(e)=>{this.handleChange(e)}} rows="4" cols="50" value={this.state.bio}/><br/><br/>
                
                <button onClick={this.Submit} type="button">Submit</button>

            </form>
        </div>
    )}
}
