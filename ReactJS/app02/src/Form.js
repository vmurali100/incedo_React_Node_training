import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email:""
    };
  }

handleChange=(e)=>{
    console.log(e.target.name);
    var inputName = e.target.name
    var newUser = {...this.state} // Creating a Copy of State and Storing in newUser
    newUser[inputName] = e.target.value
    this.setState(newUser)
}

  addUser=() =>{
    console.log(this.state);
    this.clearForm();
  }

  clearForm=() =>{
    this.setState ({
        fname: "",
        lname: "",
      });
  }
  render() {
    return (
      <div>
        <form>
          <label for="fname">Enter your first name: </label>
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          ></input>{" "}
          <br /> <br />
          <label for="lname">Enter your last name: </label>
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          ></input>{" "}
          <br /> <br />
          <label for="email">Enter your email </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          ></input>{" "}
          <br /> <br />
          <button onClick={this.addUser} type="button">Add User</button>
        </form>
      </div>
    );
  }
}
