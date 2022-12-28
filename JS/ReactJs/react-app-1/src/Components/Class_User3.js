import React, { useState } from "react";
export default class Class_User3{
    constructor(props){
        super(props)
        this.state={
            fname:"" ,lname:"",email:"",confmEmail:"",username:"",password:"",confmpwd:""
        }}
    handleChange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value
        setUser(newUser)
    }
    register=()=>{
        console.log(user)
        this.setState={fname:"" ,lname:"",email:"",confmEmail:"",username:"",password:"",confmpwd:""}
    }
    render(){
    return(
        <div>
        <h2>Register</h2>
        <form>
        <center>
        <div className="mb-3">
          <label>First Name : </label>
          <input type="text" className="form-label" name="fname" onChange={(e)=>{handleChange(e)}} value={this.state.fname}/>
          <label>Last Name : </label>
          <input type="text" className="form-label"  name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} /> <br /></div>
          
          <label >Email: </label>
          <input type="text" name="email" onChange={(e)=>{this.handleChange(e)}} value={this.state.email}/> <br />

          <label >Confirm Email: </label>
          <input type="text" name="confmEmail" onChange={(e)=>{this.handleChange(e)}} value={this.state.confmEmail}/> <br />
          <label>User Name : </label>
          <input type="text" name="username" onChange={(e)=>{this.handleChange(e)}} value={this.state.username}/> <br />
          <div className="col">
          <label>Password: </label>
          <input type="password"  name="password" onChange={(e)=>{this.handleChange(e)}} value={this.state.password}/> <br />
          <label>Confirm Password: </label>
          <input type=  "password" name="confmpwd" onChange={(e)=>{this.handleChange(e)}} value={this.state.confmpwd}/> <br /></div>
          <button  onClick={this.register} type="button">Submit</button>
          </center>
        </form>
      </div>
    )
    }
}
