import React, { Component } from 'react'

class Assclass  extends Component {
    constructor() {
      super();
    
      this.state = {
        fname:"",
        lname:"",
        uname:"",
        email:"",
        phone:"",
        pass:"",
        bio:""
    };
    }

    handleChange = (e)=>{

        var name = e.target.name;
        var newuser = {...this.state};
        newuser[name] = e.target.value;
        this.setState(newuser);
        this.handleSubmit();

    }

    addUser = ()=>{
        // console.log(this.state);
        this.clearForm()
    }

    clearForm = ()=>{
        this.setState({
            
        fname:"",
        lname:"",
        uname:"",
        email:"",
        phone:"",
        pass:"",
        bio:""


          })

        //   console.log(this.state);
    }

    render() { 
        return (
            <div>
            <form>
        
                <label htmlFor="First Name">First Name</label><br/>
                <input type="text" name="fname" value={this.state.fname} onChange={(e)=>{this.handleChange(e)}}/><br/>
        
                
                <label htmlFor="Last Name">Last Name</label><br/>
                <input type="text" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}}/><br/>
           
            
                <label htmlFor="User Name">User Name</label><br/>
                <input type="text" name="uname" value={this.state.uname} onChange={(e)=>{this.handleChange(e)}}/><br/>
              
            
                <label htmlFor="Email">Email</label><br/>
                <input type="email" name="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}}/><br/>
                
            
                <label htmlFor="Phone">Phone</label><br/>
                <input type="tel" name="phone" value={this.state.phone} onChange={(e)=>{this.handleChange(e)}}/><br/>
                
                <label htmlFor="Password">Password</label><br/>
                <input type="password" name="pass" value={this.state.pass} onChange={(e)=>{this.handleChange(e)}}/><br/>
                
                <label htmlFor="Short Bio">Short Bio</label><br/>
                <input type="text" name="bio" value={this.state.bio} onChange={(e)=>{this.handleChange(e)}}/><br/>
                
                <br/>
                <button type="button" onClick={this.addUser}>Submit</button>
                </form>
            </div>
            
        );
    }
}
 
export default Assclass;