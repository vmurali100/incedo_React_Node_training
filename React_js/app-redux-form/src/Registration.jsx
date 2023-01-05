import React from "react";
import { Component } from "react";
class Registration extends Component{
    constructor(){
        super();
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            conformemail:"",
            username:"",
            password:"",
            conformpassword:""
        }}
        handleChange=(e)=>{
            console.log(e.target.name);
            var inputName = e.target.name
            var newUser = {...this.state} 
            newUser[inputName] = e.target.value
            this.setState(newUser)
        }
        clearForm=()=>{
            this.setState({
                firstname:"",
                lastname:"",
                email:"",
                conformemail:"",
                username:"",
                password:"",
                conformpassword:""
           })
          }
        Register=()=>{
            console.log(this.state)
            this.clearForm()
          }
    render(){
        return(
            <div class="card" style={{width:'100%',height:"100%"}}>
                <form>
                <div class="p-3 mb-2 bg-info text-white" style={{textAlign:"left",borderRadius:"50px solid black",fontWeight:"bold"}}>User Registration Form <br/>
                Please complete the following form to register on our site. Thanks
                </div>
                <div class="card-body">
    <div className="row" style={{textAlign:"left"}}>
    <label for="name" className="form-label" style={{color:"#0A0A0A",fontWeight: "bold",marginTop:"20px"}}>
            Name
          </label>
        <div className="col-6">
          <input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="col-6">
          <input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="col-6">
          <span>First</span>
        </div>
        <div className="col-6">
          <span>Last</span>
        </div>
        <label for="exampleInputtext1" className="form-label" style={{color:"#0A0A0A",fontWeight: "bold",marginTop:"20px"}}>
            Email
          </label>
        <div className="col-6">
          <input type="text" className="form-control" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="col-6">
          <input type="text" className="form-control" name="conformemail" value={this.state.conformemail} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="col-6">
          <span>Enter Email</span>
        </div>
        <div className="col-6">
          <span>Confirm Email</span>
        </div>
        <label for="exampleInputtext1" className="form-label" name="lastname" style={{color:"#0A0A0A",fontWeight: "bold",marginTop:"20px"}}>
            Username
          </label>
        <div className="col-6">
          <input type="text" className="form-control" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)}/>
        </div>
        <label for="exampleInputtext1" className="form-label" style={{color:"#0A0A0A",fontWeight: "bold",marginTop:"20px"}}>
            Password
          </label>
        <div className="col-6">
          <input type="text" className="form-control" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="col-6">
          <input type="text" className="form-control" name="conformpassword" value={this.state.conformpassword} onChange={(e) => this.handleChange(e)}/>
        </div>
        <div className="col-6">
          <span>Enter Password</span>
        </div>
        <div className="col-6">
          <span>Confirm Password</span>
        </div>
        <button
            type="button"
            className="btn btn-primary"
            style={{width:"10%",marginTop:"20px"}}
            onClick={this.Register}
          >
            Submit
          </button>
        </div>
    </div>
    </form>
  </div>
        )
    }
}
export default Registration;