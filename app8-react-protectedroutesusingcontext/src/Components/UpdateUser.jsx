import React,{Component} from "react";
import UserForm from "./UserForm";
import axios from 'axios';
import { Navigate } from "react-router-dom";

class UpdateUser extends Component
{
    constructor(props) 
    {
        super(props);
        this.state={
            user:{
                  fname:"",
                  lname:"",
                  email:""},
            isEdit:true,
            moveToReadUser:false
        }
    }
    componentDidMount()
    {
        var loc = window.location.href;
        var arr = loc.split('/');
        axios.get("http://localhost:3000/users/"+arr[4]).then(response=>{this.setState({user:response.data})});
    }
    handleChange=(e)=>
    {
       var newUser = {...this.state.user};
       newUser[e.target.name] = e.target.value;
       this.setState({user:newUser});
    }

    handleSubmit=()=>{
        
        axios.put("http://localhost:3000/users/"+this.state.user.id,this.state.user).then(()=>{
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
               {this.state.moveToReadUser && <Navigate to="/read" replace={true}/>}
               <h1>UpdateUser</h1>
               {console.log(this.state.isEdit)}
               <UserForm user={this.state.user} handleSubmit={this.handleSubmit} handleChange={this.handleChange} isEdit={this.state.isEdit} clearForm={this.clearForm} />
               </>
    };
};

export default UpdateUser;