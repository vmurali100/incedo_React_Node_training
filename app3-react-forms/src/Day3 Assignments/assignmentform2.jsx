import React, { Component } from "react";
import '../Styling/assignmentform2.css'

class AssignmentForm2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            shortbio: ""
        }
    }

    handleChange=(e)=>{
        console.log(e.target.name+" "+e.target.value);
        this.setState({...this.state,[e.target.name]:e.target.value});
    }

    handleSubmit = (e)=>{
        console.log(this.state);
        this.clearForm();
    }

    clearForm = ()=>{
        this.setState({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            shortbio: ""
        });
    }
    render() {
        return <>
            <h1>Register</h1>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name" aria-required>Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <input name="firstname" id="firstname" type="text" onChange={(e)=>{this.handleChange(e)}} value={this.state.firstname} className="form-control" />
                            <div className="form-text">First</div>
                        </div>
                        <div className="col-4">
                        <input name="lastname" id="lastname" type="text" onChange={(e)=>{this.handleChange(e)}} value={this.state.lastname} className="form-control" />
                        <div className="form-text">Last</div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <label htmlFor="username" aria-required>UserName</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <input name="username" id="username" type="text" onChange={(e)=>{this.handleChange(e)}} value={this.state.username} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <label htmlFor="email" aria-required>Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <input name="email" id="email" type="text" onChange={(e)=>{this.handleChange(e)}} value={this.state.email} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <label htmlFor="password" aria-required>Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <input name="password" id="password" type="password" onChange={(e)=>{this.handleChange(e)}} value={this.state.password} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <label htmlFor="shortbio" aria-required>Short Bio</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <textarea name="shortbio" id="shortbio" type="text" onChange={(e)=>{this.handleChange(e)}} value={this.state.shortbio} className="form-control" />
                        </div>
                    </div>
                </div>
               
            </form><br/>
            <center><button onClick={()=>this.handleSubmit()} className="btn btn-primary">Submit</button></center>
        </>
    }
};

export default AssignmentForm2;