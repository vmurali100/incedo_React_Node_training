import React,{Component} from 'react';
import UserFormAxios from './UserFormAxios';
import UserTableAxios from './UserTableAxios';
import axios from 'axios';

class RegisterParentAxiosForm extends Component
{

    constructor()
    {
        super();
        this.state={
            user:{fname:"",lname:"",email:""},
            users:[],
            isEdit:false
        };
    }

    componentDidMount()
    {
        this.getAllUsers();
    }

    handleSubmit = ()=>{

        axios.post("http://localhost:3000/users/",this.state.user).then(()=>{
            this.clearForm();
            this.getAllUsers();
        });
        
    };

    getAllUsers = ()=>{
        axios.get("http://localhost:3000/users").then((response) =>{this.setState({users:response.data})});
    }
    
    handleChange = (e)=>{
        let newUser = {...this.state.user};
        newUser[e.target.name] = e.target.value;
        this.setState({user:newUser});
    }

    updateUser = async ()=>{
        axios.put("http://localhost:3000/users/"+this.state.user.id,this.state.user).then(()=>{this.getAllUsers();
                                                                                               this.setState({isEdit:false});
                                                                                               this.clearForm();})
    }
    
    editUser = async (usr)=>
    {
       this.setState({user:usr});
       await this.setState({isEdit:true});
    };


    deleteUser = (user)=>{
        axios.delete("http://localhost:3000/users/"+user.id).then(()=>{this.getAllUsers()})
    }

    clearForm = ()=>{
        this.setState({user:{fname:"",lname:"",email:""}});
    }

    render()
    {
        return <>
               <div className="container">
                <div className="row">
                    <div className="col-6">
                       <UserFormAxios user={this.state.user} handleChange={this.handleChange} handleSubmit = {this.handleSubmit} clearForm={this.clearForm}  isEdit = {this.state.isEdit} updateUser={this.updateUser} />
                    </div>
                    <div className="col-6">
                       <UserTableAxios users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
                    </div>
                </div>
               </div>
               </>
    };
}

export default RegisterParentAxiosForm;