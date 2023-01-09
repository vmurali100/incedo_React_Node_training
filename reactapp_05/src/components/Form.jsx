import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state={
            fname : "",
            lname : "",
            email : "",
            uname : "",
            enterpass : "",
            confirmpass : ""

        };
    }

    handleChange = (e)=>{
        var name = e.target.name;
        var newuser = {...this.state};
        newuser[name] = e.target.value;
        this.setState(newuser);

    }

    addUser = ()=>{
        // console.log(this.state);
        this.clearForm()
    }

    clearForm = ()=>{
        this.setState({
            
            fname : "",
            lname : "",
            email : "",
            uname : "",
            enterpass : "",
            confirmpass : ""


          })

          console.log(this.state);
    }


    
    render() { 
        return (
         <div>
            <form>
                <h1>REGISTER</h1>
                <label htmlFor = "First Name" >First Name : </label>
                <input type ="text" name = "fname" value = {this.state.fname} onChange = {(e)=>{this.handleChange(e)}} /><br/>
                <label htmlFor = "Last Name" >Last Name : </label>
                <input type ="text" name = "lname" value = {this.state.lname} onChange = {(e)=>{this.handleChange(e)}} /><br/>
                <label htmlFor = "Email" >Email : </label>
                <input type ="email" name = "email" value = {this.state.email} onChange = {(e)=>{this.handleChange(e)}} /><br/>
                <label htmlFor = "User Name" >User Name : </label>
                <input type ="text" name = "uname" value = {this.state.uname} onChange = {(e)=>{this.handleChange(e)}} /><br/>
                <label htmlFor = "Enter Password" >Enter Password : </label>
                <input type ="password" name = "enterpass" value = {this.state.enterpass} onChange = {(e)=>{this.handleChange(e)}} /><br/>
                <label htmlFor = "Confirm Password" >Confirm Password : </label>
                <input type ="password" name = "confirmpass" value = {this.state.confirmpass} onChange = {(e)=>{this.handleChange(e)}} /><br/>
                <button type = "button" onClick={this.addUser}>Register</button>
                
            </form>
            </div>

        );
    }
}
 
export default Form ;