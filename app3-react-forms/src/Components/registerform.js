import React,{Component} from 'react';

class RegisterForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
           fname:"",
           lname:"",
           email:"",
           username:"",
           password:"",
           confirmpassword:""
        };
    }
    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({...this.state,[e.target.name]:e.target.value});
    }

    addUser=()=>
    {
        console.log(this.state);
        this.clearForm();
    };

    clearForm = ()=>{
        this.setState({
           fname:"",
           lname:"",
           email:"",
           username:"",
           password:"",
           confirmpassword:""
            
        })
    }

    render()
    {
        return <>
               <h2>Register</h2>
               <label htmlFor='fname'>First name</label><br/>
               <input name="fname" id="fname" type="text" onChange={(e)=>this.handleChange(e)} value={this.state.fname}></input><br/><br/>
               <label htmlFor="lname">Last name</label><br/>
               <input name="lname" id="lname" type="text" onChange={(e)=>this.handleChange(e)} value={this.state.lname}></input><br/><br/>
               <label htmlFor="email">Email</label><br/>
               <input name="email" id="email" type="text" onChange={(e)=>this.handleChange(e)} value={this.state.email}></input><br/><br/>
               <label htmlFor="username">Username</label><br/>
               <input name="username" id="username" type="text" onChange={(e)=>this.handleChange(e)} value={this.state.username}></input><br/><br/>
               <label htmlFor="password">Enter Password</label><br/>
               <input name="password" id="password" type="password" onChange={(e)=>this.handleChange(e)} value={this.state.password}></input><br/><br/>
               <label htmlFor="confirmpassword">Confirm Password</label><br/>
               <input name="confirmpassword" id="confirmpassword" type="password" onChange={(e)=>this.handleChange(e)} value={this.state.confirmpassword}></input><br/><br/>
               <button onClick={()=>this.addUser()}>Add User</button>
               </>
    }
}

export default RegisterForm;