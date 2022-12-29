import { Component } from "react";
export default class Classcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      username: "",
      email: "",
      phone: "",
      pass: "",
      bio: "",
    };
  }
  handleChange = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value });
    let newUser = { ...this.state };
    newUser[e.target.name] = e.target.value;
    this.setState(newUser);
  };
  handleClick = () => {
    console.log("User :", this.state);
    this.setState({
      fname: "",
      lname: "",
      username: "",
      email: "",
      phone: "",
      pass: "",
      bio: "",
    });
  };
  render() {
    return (
      <div>
        <form>
          <h1>Register</h1>
          <div className="row">
            <label htmlFor="fname" className="form-label">
              {" "}
              Name{" "}
            </label>
            <div className="col-6">
              <input
                className="form-control"
                type="text"
                name="fname"
                id="fname"
                value={this.state.fname}
                onChange={(e) => this.handleChange(e)}
              />
              <label htmlFor="fname" className="form-label">
                First{" "}
              </label>
            </div>
            <div className="col-6">
              <input
                className="form-control"
                type="text"
                name="lname"
                id="lname"
                value={this.state.lname}
                onChange={(e) => this.handleChange(e)}
              />
              <label htmlFor="lname">Last </label>
            </div>
          </div>
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={this.state.email}
            className="form-control"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label htmlFor="phone" className="form-label">
            Phone :
          </label>
          <br />
          <input
            type="tel"
            name="phone"
            id="phone"
            pattern="[+]{1}[0-9]{11,14}"
            value={this.state.phone}
            className="form-control"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label htmlFor="pass" className="form-label">
            Password :
          </label>
          <br />
          <input
            type="password"
            name="pass"
            id="pass"
            value={this.state.pass}
            className="form-control"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label htmlFor="bio" className="form-label">
            Shot Bio:
          </label>
          <br />
          <input
            type="text"
            name="bio"
            id="bio"
            value={this.state.bio}
            className="form-control"
            onChange={(e) => this.handleChange(e)}
          />
          <label className="form-label">
            {" "}
            Share a little information about yourself{" "}
          </label>
          <br />
          <br />
          <button type={"button"} onClick={this.handleClick}>
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    );
  }
}
