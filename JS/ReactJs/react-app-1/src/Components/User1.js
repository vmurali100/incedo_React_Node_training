import React from "react";
export default class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:"",
            lname:"",
            email:"",
            username:"",
            password:"",
            confmpassword:""
        }}
        handleChange(e){
            var inputName=e.target.name
            //copy of the state
            var newUser={...this.state}
            newUser[inputName]=e.target.value
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
            confmpassword:""
        })   
        }
    render(){
        return(
            <div>
                <h2>Register</h2>
                <form>

                    <label >First Name:</label>
                    <input type="text" name="fname" onChange={(e)=>{this.handleChange(e)}} value={this.state.fname}/><br/><br/>
                    <label >Last Name:</label>
                    <input type="text" name="lname" onChange={(e)=>{this.handleChange(e)}} value={this.state.lname}/><br/><br/>
                    <label >Email:</label>
                    <input type="text" name="email" onChange={(e)=>{this.handleChange(e)}} value={this.state.email}/><br/><br/>
                    <label >Username:</label>
                    <input type="text" name="username" onChange={(e)=>{this.handleChange(e)}} value={this.state.username}/><br/><br/>
                    <label >Password:</label>
                    <input type="password" name="password" onChange={(e)=>{this.handleChange(e)}} value={this.state.password}/><br/><br/>
                    <label >Confirm Password:</label>
                    <input type="password" name="confmpassword" onChange={(e)=>{this.handleChange(e)}} value={this.state.confmpassword}/><br/><br/>
                    <button onClick={this.Register} type="button">Register</button>
                </form>
            </div>
        )
    }
}