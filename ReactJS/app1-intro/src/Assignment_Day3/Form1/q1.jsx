import React,{Component} from "react";

class Form1 extends Component
{
  constructor(props){
    super(props);
    this.state={
        username:"",
        email:"",
        password:"",
        website:"",
        fname:"",
        lname:"",
        dpname:"",
        
    }
  }
  handleChange=(e)=>{
    console.log(e.target.name);
    var inputName = e.target.name
    var newUser = {...this.state} // Creating a Copy of State and Storing in newUser
    newUser[inputName] = e.target.value
    this.setState(newUser)
}
addUser=()=>{
  console.log(this.state)
  this.clearForm()
}
clearForm=()=>{
  this.setState({
        username:"",
        email:"",
        password:"",
        website:"",
        fname:"",
        lname:"",
        dpname:"",
 })
}
  render(){
    return(
      <div>
        <h1>Registration Form</h1>
        <div className="row">
          <div className="col-3">
          <p>Trigger this action when</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
          </div>
           <div className="col-4">
                <p>Trigger this action when</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label htmlFor="email">User Email</label>
            <input
            type="email"
            className="form-control"
            value={this.state.email}
            name="email"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          </div>
          <div className="col-4">
            <label htmlFor="uname">User Name</label>
            <input type="text" className="form-control" value={this.state.username} name="username" onChange={(e)=>{this.handleChange(e)}}/>
          </div>
        </div>
        <div className="col-4">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" value={this.state.password} name="password" onChange={(e)=>{this.handleChange(e)}}/>
        </div>
        <div className="row">
          <div className="col-3">
            <label htmlFor="fname">First Name</label>
            <input type="text" className="form-control" value={this.state.fname} name="fname" onChange={(e)=>{this.handleChange(e)}}/>
          </div>
          <div className="col-4">
            <label htmlFor="lname">Last Name</label>
            <input type="text" className="form-control" value={this.state.lname} name="lname" onChange={(e)=>{this.handleChange(e)}}/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label htmlFor="dpname">Display Name</label>
            <input type="text" className="form-control" value={this.state.dpname} name="dpname" onChange={(e)=>{this.handleChange(e)}}/>
          </div>
          <div className="col-4">
            <label htmlFor="website">Website</label>
            <input type="text" className="form-control" value={this.state.website} name="website" onChange={(e)=>{this.handleChange(e)}}/>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.addUser}
        >
          Submit
        </button>
      </div>
    );
  }
}




export default Form1;