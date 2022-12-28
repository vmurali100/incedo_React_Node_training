import React,{Component} from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';

class ParentRegistrationForm extends Component
{

    constructor()
    {
        super();
        this.state={
            user:{fname:"",lname:"",email:""},
            users:[],
            editIndex:null
        };
    }

    handleSubmit = ()=>{
        var newUser = [...this.state.users];
        newUser.push(this.state.user);
        this.setState({users:newUser});
        this.clearForm();
        
    }
    
    handleChange = (e)=>{
        let newUser = {...this.state.user};
        newUser[e.target.name] = e.target.value;
        this.setState({user:newUser});
    }

    updateUser = ()=>{
        console.log(this.state.editIndex);
        var newUser = [...this.state.users];
        newUser[this.state.editIndex] = this.state.user;
        this.setState({users:newUser});
        this.clearForm();
    }
    
    editUser = async (usr,i)=>
    {
        console.log(usr,i);
       this.setState({user:usr});
       await this.setState({editIndex:i});
       console.log(this.state.editIndex);
    };


    deleteUser = (user)=>{
        console.log(user);
        var newUsers = this.state.users.filter(usr=>usr.fname !=  user.fname);
        this.setState({users:[...newUsers]});
    }
    clearForm = ()=>{
        this.setState({user:{fname:"",lname:"",email:""}});
    }

    render()
    {
        return <>
               <div className="container">
                <div className="row">
                    <div className="col">
                       <UserForm user={this.state.user} handleChange={this.handleChange} handleSubmit = {this.handleSubmit} clearForm={this.clearForm}  editIndex = {this.state.editIndex} updateUser={this.updateUser} />
                    </div>
                    <div className="col">
                       <UserTable users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
                    </div>
                </div>
               </div>
               </>
    };
}

export default ParentRegistrationForm;