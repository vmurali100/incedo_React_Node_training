import React, { Component } from 'react'

export default class Forms extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          fname: "",
          lname : "",
          email:"",
          username:"",
          password :"",
          confirmPassword:"",
      }
    }

    handleChange =(e) =>{

         const name   = e.target.name;
        this.setState({...this.state , [name]: e.target.value })

    }
    
  render() {
    return (
      <div>

            <form>
                <label> First Name:</label>
                 <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.fname}  name="fname"  />
                 <br />
                 <label> Last Name </label>
                 <input onChange={(e)=> this.handleChange(e)}  type="text"  value={this.state.lname} name="lname" /> 
                 <br />
                 <label > Email</label>
                 <input onChange={(e)=> this.handleChange(e)}  type="email"  value={this.state.email} name="email" />
                 <br /> 
                 <label > Username</label>
                 <input onChange={(e)=> this.handleChange(e)}  type="text"  value={this.state.username} name="username" />
                 <br /> 
                 <label > Password</label>
                 <input onChange={(e)=> this.handleChange(e)}  type="password"  value={this.state.password} name="password" />
                 <br /> 
                 <label > Confirm Password </label>
                 <input onChange={(e)=> this.handleChange(e)}  type="password"  value={this.state.confirmPassword} name="confirmPassword" /> 
                 <br />


                 <button onClick={(e) =>console.log(this.state)}  type='button'>Register</button>
            </form>
         
      </div>

    )
  }
}
