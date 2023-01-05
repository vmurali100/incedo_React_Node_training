import React, { Component } from "react";

export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        username: "",
        email: "",
        password: "",
        rpassword: "",
      },
      isEdit: false,
    };
  }

  handleDelete = (emp) => {
    this.props.deleteEmployee(emp);
  };
  addEmp = () => {
    console.log(this.state.employee);
    this.props.addEmp(this.state.employee);
    this.clearForm();
  };
  clearForm = () => {
    this.setState({
      employee: {
        username: "",
        email: "",
        password: "",
        rpassword: ""
      },
    });
  };
  handleChange = (e) => {
    let newEmp = { ...this.state.employee };
    newEmp[e.target.name] = e.target.value;
    this.setState({ employee: newEmp });
  };

  updateEmp = () => {
    this.props.udpateEmpFunc(this.state.employee);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form action="">
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            name="username"
            value={this.state.employee.username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />

          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="email"
            value={this.state.employee.email}
            disabled={this.state.isEdit ? true : false}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />

          <label htmlFor="password">Password : </label>
          <input
            type="text"
            name="password"
            value={this.state.employee.password}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />

          <label htmlFor="rpassword">Repeat Password : </label>
          <input
            type="text"
            name="rpassword"
            value={this.state.employee.rpassword}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />

          {this.state.isEdit ? (
            <button onClick={this.updateEmp} type="button">
              Update Employee
            </button>
          ) : (
            <button onClick={this.addEmp} type="button">
              Add Employee
            </button>
          )}
        </form>
      </div>
    );
  }
}

