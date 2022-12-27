import '../Css/UserFunc1.css';
import React, { Component } from "react";

export default class UserClass1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            username: "",
            enterpassword: "",
            confirmpassword: ""
        }
    }

    handleChange = (e) => {
        console.log(e.target.name);
        var inputName = e.target.name
        var newUser = { ...this.state } // Creating a Copy of State and Storing in newUser
        newUser[inputName] = e.target.value
        this.setState(newUser)
    }

    addUser = () => {
        console.log(this.state)
        this.clearForm()
    }

    clearForm = () => {
        this.setState({
            fname: "",
            lname: "",
            email: "",
            username: "",
            enterpassword: "",
            confirmpassword: ""
        })
    }
    render() {
        return (<div>
                <div class="row">
                    <div class="col-sm-4">
                    </div>
                    <div class="col-sm-4">
                    </div>
                    <div class="row"></div>
                    <div class="col-sm-4">
                    </div>
                    <div class="col-sm-4">
                        <div class="signup_form">
                            <form>
                            <div class="labeltext" style={{"font-weight":"bold","text-align":"center","font-size":"30px"}}>Register</div>
                                <div class="form-group">
                                    <label htmlFor="First Name">First Name</label>
                                    <input type="text" name="fname" onChange={(e) => { this.handleChange(e) }} value={this.state.fname} />
                                </div>
                                <div class="form-group">
                                <label htmlFor="Last Name">Last Name</label>
                                <input type="text" name="lname" value={this.state.lname} onChange={(e) => { this.handleChange(e) }} />
                                </div>
                                <div class="form-group">
                                <label htmlFor="Email">Email</label>
                                <input type="email" name="email" value={this.state.email} onChange={(e) => { this.handleChange(e) }} />
                                </div>
                                <div class="form-group">
                                <label htmlFor="Username">Username</label>
                                <input type="text" name="username" value={this.state.username} onChange={(e) => { this.handleChange(e) }} />
                                </div>
                                <div class="form-group">
                                <label htmlFor="Enter Password">Enter Password</label>
                                <input type="password" name="enterpassword" value={this.state.enterpassword} onChange={(e) => { this.handleChange(e) }} />
                                </div>
                                <div class="form-group">
                                <label htmlFor="Confirm Password">Confirm Password</label>
                                <input type="password" name="confirmpassword" value={this.state.confirmpassword} onChange={(e) => { this.handleChange(e) }} />
                                </div>
                                <a href="#" style={{"text-decoration":"none"}}>Back to Login</a>
                                <br />
                                <button onClick={this.addUser} type="button" class="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}