import React,{Component} from "react";
import UserForm from "./UserForm";
import axios from 'axios';
import { Navigate } from "react-router-dom";

class CreateUser extends Component
{
    constructor(props) 
    {
        super(props);
        this.state={
            user:{fname:"",
                  lname:"",
                  email:""},
            isEdit:false,
            moveToReadUser:false
        }
    }
    handleChange=(e)=>
    {
       var newUser = {...this.state.user};
       newUser[e.target.name] = e.target.value;
       this.setState({user:newUser});
    }
    handleSubmit=()=>{
        axios.post("http://localhost:3000/users",this.state.user).then(()=>{
            this.clearForm();
            this.setState({moveToReadUser:true});
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
               {this.state.moveToReadUser && <Navigate to="/read" replace={true} />}
               <UserForm user={this.state.user} handleChange={this.handleChange} handleSubmit={this.handleSubmit} isEdit={this.state.isEdit}/>
               </>
    };
};

export default CreateUser;