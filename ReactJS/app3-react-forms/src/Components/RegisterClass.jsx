import { Component } from "react";

export class RegisterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
    };
  }
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  register = () => {
    console.log(this.state);
    this.clearForm();
  };
  clearForm = () => {
    this.setState({
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
    });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="First Name">First Name : </label>
          <br />
          <input
            type="text"
            name="fname"
            onChange={(e) => this.handleChange(e)}
            value={this.state.fname}
          />
          <br />
          <label htmlFor="Last Name">Last Name : </label>
          <br />
          <input
            type="text"
            name="lname"
            onChange={(e) => this.handleChange(e)}
            value={this.state.lname}
          />
          <br />
          <label htmlFor="Email">Email Id : </label>
          <br />
          <input
            type="text"
            name="email"
            onChange={(e) => this.handleChange(e)}
            value={this.state.email}
          />
          <br />
          <label htmlFor="User Name">User Name : </label>
          <br />
          <input
            type="text"
            name="username"
            onChange={(e) => this.handleChange(e)}
            value={this.state.username}
          />
          <br />
          <label htmlFor="Password">Password : </label>
          <br />
          <input
            type="text"
            name="password"
            onChange={(e) => this.handleChange(e)}
            value={this.state.password}
          />
          <br />
          <label htmlFor="Confirm Password">Confirm Password: </label>
          <br />
          <input
            type="text"
            name="confirmpassword"
            onChange={(e) => this.handleChange(e)}
            value={this.state.confirmpassword}
          />
          <br />
          <button onClick={this.register} type="button">
            Register
          </button>
        </form>
      </div>
    );
  }
}
