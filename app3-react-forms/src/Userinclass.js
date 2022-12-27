import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props)
        this.state={
            fname:"",
            lname:"",
            email:"",
            username:"",
            Enterpwd:"",
            Confirmpwd:""
        }
    }
    handlechange=(e)=>{
        const name = e.target.name;
        this.setState({ ...this.state ,  [name] : e.target.value })

    } 
    onsubmit=()=>{
        console.log(this.state)
    }
    
     render() {
    return (
      <div>
        <h3>Register</h3>
        <form >
            <label>First name  </label>
            <input type="text" onChange={(e)=>{this.handlechange(e)}} value={this.state.fname} name='fname'/><br/>
            <label>Last name   </label>
            <input type="text" onChange={(e)=>{this.handlechange(e)}} value={this.state.lname} name="lname"/><br/>
            <label>email       </label>
            <input type="text" onChange={(e)=>{this.handlechange(e)}} value={this.state.email} name="email"/><br/>
            <label>Username    </label>
            <input type="text" onChange={(e)=>{this.handlechange(e)}} value={this.state.username} name="username"/><br/>
            <label>Enterpassword</label>
            <input type="password" onChange={(e)=>{this.handlechange(e)}} value={this.state.Enterpwd} name="Enterpwd"/><br/>
            <label>cnfm Password</label>
            <input type="password" onChange={(e)=>{this.handlechange(e)}} value={this.state.Confirmpwd} name="Confirmpwd"/><br/>
           <button type="button" onClick={this.onsubmit}>submit</button>
        </form>
       
      </div>
    )
  }
}


