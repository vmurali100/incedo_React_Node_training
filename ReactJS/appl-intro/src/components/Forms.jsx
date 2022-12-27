import { Fragment } from "react";
import { Component } from "react";
const startState={
    fname:"",
    lname:"",
    email:"",
    username:"",
    pass:"",
    cpass:"",
}
class Froms extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            ...startState

        }
    }
    handleChange=(e)=>
    {
        const name=e.target.name;
        const newState={...this.state};
        newState[name]=e.target.value;
        this.setState(newState);
    }
    handleClick=function()
    {
         this.setState(startState);
    }
    render()
    {
        return <Fragment>
            <h1>Class Components</h1>
            <form>
            <label for="fname">First Name : </label>
      <input type="text" name="fname" id="fname"  value={this.state.fname} onChange={(e)=>this.handleChange(e)}/> <br />
      <br />
     
            <label for="lname">Last Name : </label>
      <input type="text" name="lname" id="lname"  value={this.state.lname} onChange={(e)=>this.handleChange(e)}/> <br />
      <br />
      <label for="email">Email :</label>
      <input type="text" name="email" id="email"  value={this.state.email} onChange={(e)=>this.handleChange(e)}/> <br />
      <br />
      <label for="username">Username:</label>
      <input type="text" name="username" id="username"  value={this.state.username} onChange={(e)=>this.handleChange(e)}/> <br />
      <br />
      <label for="pass">Password :</label>
      <input type="password" name="pass" id="pass"  value={this.state.pass} onChange={(e)=>this.handleChange(e)}/> <br />
      <br />
      <label for="cpass">Confirm Password :</label>
      <input type="password" name="cpass" id="cpass"  value={this.state.cpass} onChange={(e)=>this.handleChange(e)}/> <br />
      <br />
    
      <button onClick={this.handleClick} >Register</button>
            </form>
        </Fragment>
    }
}
export default Froms;