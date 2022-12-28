import { Component } from "react";
export default class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      username: "",
      pass: "",
      bio: "",
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const newState = { ...this.state };
    newState[name] = e.target.value;
    this.setState(newState);
  };
  handleClick = () => {
    console.log("User :", this.state);
    this.setState({
      fname: "",
      lname: "",
      email: "",
      username: "",
      pass: "",
      bio: "",
    });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={this.state.fname}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <label htmlFor="lname">Last Name : </label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={this.state.lname}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            id="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <label htmlFor="pass">Password :</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={this.state.pass}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <label htmlFor="bio">Shot Bio:</label>
          <input
            type="text"
            name="bio"
            id="bio"
            value={this.state.bio}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <button type={"button"} onClick={this.handleClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
