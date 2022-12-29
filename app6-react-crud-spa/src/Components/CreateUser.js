import React,{Component} from "react";
import UserForm from "./UserForm";
import axios from 'axios';

class CreateUser extends Component
{
    constructor(props) 
    {
        super(props);
        this.state={
            user:{fname:"",
                  lname:"",
                  email:""}
        }
    }
    handleChange=(e)=>
    {
       var newUser = {...this.state.user};
       newUser[e.target.name] = e.target.value;
       this.setState({user:newUser});
    }
    handleSubmit=()=>{
        axios.post("http://localhost:3000/users"+this.state.user).then(()=>{
            clearForm();
        });
    }
    clearForm = ()=>
    {
        this.setState({user:{fname:"",
        lname:"",
        email:""}});
    }
    render()
    {
        return <>
               <h1>CreateUser</h1>
               <UserForm user={this.state.user} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
               </>
    };
};

export default CreateUser;