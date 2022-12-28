
import React, { useState } from "react";
export default class Func_user2{
    constructor(props){
        super(props)
        this.state={
            fname:"" ,lname:"",username:"",email:"",phone:"",password:"",shortbio:""        }}
    handleChange=(e)=>{
            var inputName=e.target.name
            //copy of the state
            var newUser={...this.state}
            newUser[inputName]=e.target.value
            this.setState(newUser)
    }
    register=()=>{
        console.log(this.state)
        this.setState({fname:"" ,lname:"",username:"",email:"",phone:"",password:"",shortbio:""})
    }
    render(){
    return(
        <div>
        <h2>Register</h2>
        <form>
        <center>
        <div className="mb-3">
          <label>First Name : </label>
          <input type="text" className="form-label" name="fname" onChange={(e)=>{this.state.handleChange(e)}} value={this.state.fname}/>
          <label>Last Name : </label>
          <input type="text" className="form-label"  name="lname" value={this.state.lname} onChange={(e)=>{this.state.handleChange(e)}} /> <br /></div>
          <div className="grid-container">
          <label>User Name : </label>
          <input type="text" name="username" onChange={(e)=>{this.state.handleChange(e)}} value={this.state.username}/> <br /></div>
          <label >Email: </label>
          <input type="text" name="email" onChange={(e)=>{this.state.handleChange(e)}} value={this.state.email}/> <br />
          <label>Phone : </label>
          <input type="text" name="phoneno" onChange={(e)=>{this.state.handleChange(e)}} value={this.state.phoneno}/> <br />
          <label>Password : </label>
          <input type="password"  name="password" onChange={(e)=>{this.state.handleChange(e)}} value={this.state.password}/> <br />
          <label>Short Bio : </label>
          <textarea type="text" name="shortbio" onChange={(e)=>{this.state.handleChange(e)}} value={this.state.shortbio}/> <br />
          <button  onClick={this.register} type="button">Submit</button>
          </center>
        </form>
      </div>
    )
    }
}
