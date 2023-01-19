import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmpAction, deleteEmpAction, updateEmpAction } from "../actions";

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        username: "",
        email: "",
        password: "",
        repeatpassword: "",
      },
      isEdit: false,
    };
  }

  handleDelete = (emp) => {
    //from here i will trigger an action
    this.props.deleteEmployee(emp);
  };
  addEmp = () => {
    console.log(this.state.employee);
    this.props.addEmp(this.state.employee);
    this.clearForm();
  };
  clearForm = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      repeatpassword: "",
    });
  };
  handleChange = (e) => {
    let newEmp = { ...this.state.employee };
    newEmp[e.target.name] = e.target.value;
    this.setState({ employee: newEmp });
  };

  updateEmp = () => {
    this.props.udpateEmpFunc(this.state.employee);
    // this.clearForm();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form action="">
          <label htmlFor="username" className="html-label">
            First Name :{" "}
          </label>
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
            disabled={this.state.isEdit ? true : false}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="password"> Repeat Password : </label>
          <input
            type="text"
            name="repeat Password"
            value={this.state.employee.password}
            disabled={this.state.isEdit ? true : false}
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
        <ul>
          {this.props.employees.map((emp, i) => (
            <li
              style={{ margin: 5, cursor: "pointer" }}
              key={i}
              onClick={() => {
                this.setState({ employee: emp, isEdit: true });
              }}
            >
              {emp.email}- {emp.username} - {emp.password}
              <span
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "grey",
                  padding: 2,
                  color: "white",
                  marginLeft: 10,
                }}
                onClick={() => {
                  this.handleDelete(emp);
                }}
              >
                X{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// Map State to Props contains access to the Store ... And Helps to retrive the required Data ..
function mapStateToProps(state) {
  console.log("Store is : ", state);
  return {
    employees: state.employees,
  };
}
// This function will receive an dispatch Method and help to trigger the actions
function mapDispatchToProps(dispatch) {
  return {
    deleteEmployee: (emp) => dispatch(deleteEmpAction(emp)),
    addEmp: (emp) => dispatch(addEmpAction(emp)),
    udpateEmpFunc: (emp) => dispatch(updateEmpAction(emp)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Employees); //
