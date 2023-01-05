import React, { Component } from 'react'
import { connect } from "react-redux";
import { AddUserFunction } from '../actions';

class Registration extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:{
            username:"",
            email:"",
            password:"",
            password2:""
         }
      }
    }

    clearForm=()=>{
        this.setState({user:{
            username:"",
            email:"",
            password:"",
            password2:""
         }})
    }

    handleChange=(e)=>{
        var newUser = {...this.state.user};
        newUser[e.target.name]=e.target.value;
        this.setState({user:newUser});
    }
    
    handleSubmit=()=>{
        this.props.addUser(this.state.user);
        
        this.clearForm();
    }

    render() {
        return (
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" name="username" className="form-control"  value={this.state.user.username} onChange={(e)=>{this.handleChange(e)}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" value={this.state.user.email} onChange={(e)=>{this.handleChange(e)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" value={this.state.user.password} onChange={(e)=>{this.handleChange(e)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Repeat Password</label>
                        <input type="password" name="password2" className="form-control" value={this.state.user.password2} onChange={(e)=>{this.handleChange(e)}}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        users:state.users,
    }
}

function mapDispatchToProps(dispatch){
    return {
        addUser:(user)=>dispatch(AddUserFunction(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);