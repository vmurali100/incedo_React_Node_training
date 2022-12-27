import React, { Component } from 'react';

class AssignmentForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionType:"",
            emailAddress: "",
            password: "",
            firstName: "",
            displayName: "",
            userRole: "",
            userName: "",
            lastName: "",
            website: "",
            avatar: "",
            triggerAction: ""
        };
    }

    handleSubmit = () => 
    {
         console.log(this.state);
         this.clearForm();
    }

    handleChange = (e) => {
        console.log(e+" "+e.target.name+" "+e.target.value);
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    clearForm = () => {
        this.setState({
            actionType:"",
            emailAddress: "",
            password: "",
            firstName: "",
            displayName: "",
            userRole: "",
            userName: "",
            lastName: "",
            website: "",
            avatar: "",
            triggerAction: ""
        });
    }
    render() {
        return <>
            <center><h1>AssignmentForm1</h1></center>
            <form >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label htmlFor='actionType'>Action Name</label>
                        </div>
                        <div className="col">
                            <label htmlFor='triggerAction'>Trigger this action when</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <select name="actionType" id="actionType" class="form-select form-select-sm" onChange={(e)=>{this.handleChange(e)}} value={this.state.actionType}>
                                <option>Select Below Actions</option>
                                <option value="Register User">Register User</option>
                                <option value="UnRegister User">UnRegister User</option>
                            </select>
                        </div>
                        <div className="col">
                            <select name='triggerAction' id='triggerAction' class="form-select form-select-sm" onChange={(e)=>{this.handleChange(e)}} value={this.state.triggerAction}>
                                <option>Select Below Action Triggers</option>
                                <option value="Entry is Created">Entry is Created</option>
                                <option value="Entry is updated">Entry is updated</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor='emailAd>dress'>User Email</label>
                        </div>
                        <div className="col">
                            <label htmlFor='userName'>User Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="emailAddress" name="emailAddress" type="text" onChange={(e) => this.handleChange(e)} value={this.state.emailAddress} className="form-control" />
                        </div>
                        <div className="col">
                            <input id="userName" name="userName" type="text" onChange={(e) => this.handleChange(e)} value={this.state.userName} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor='password'>Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input id="password" name="password" type="password" onChange={(e) => this.handleChange(e)} value={this.state.password} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor='firstName'>First Name</label>
                        </div>
                        <div className="col">
                            <label htmlFor='lastName'>Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="firstName" name="firstName" type="text" onChange={(e) => this.handleChange(e)} value={this.state.firstName} className="form-control" />
                        </div>
                        <div className="col">
                            <input id="lastName" name="lastName" type="text" onChange={(e) => this.handleChange(e)} value={this.state.lastName} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor='displayName'>Display Name</label>
                        </div>
                        <div className="col">
                            <label htmlFor='website'>Website</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input id="displayName" name="displayName" type="text" onChange={(e) => this.handleChange(e)} value={this.state.displayName} className="form-control"/>
                        </div>
                        <div className="col">
                            <input id="website" name="website" type="text" onChange={(e) => this.handleChange(e)} value={this.state.website} className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor='userRole'>User Role</label>
                        </div>
                        <div className="col">
                            <label htmlFor='avatar'>Avatar</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <select name="userRole" id="userRole" class="form-select form-select-sm" onChange={(e)=>{this.handleChange(e)}} value={this.state.userRole} >
                            <option selected>Select the role</option>
                            <option value="admin">Admin</option>
                            <option value="developer">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="employee">Employee</option>
                        </select>
                        </div>
                        <div className="col">
                        <input id="avatar" name="avatar" type="text" onChange={(e) => this.handleChange(e)} value={this.state.avatar} className="form-control"/>  
                        </div>
                    </div><br/>
                    <center><button type="button" onClick={(e)=>{this.handleSubmit(e)}}className="btn btn-primary">submit</button></center>
                </div>
            </form>
        </>
    }
};

export default AssignmentForm1;