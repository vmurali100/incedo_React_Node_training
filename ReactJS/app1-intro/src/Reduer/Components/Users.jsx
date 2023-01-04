import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmpAction,  deleteEmpAction, updateEmpAction } from "../actions";
class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        username: "",
        email: "",
        password:"",
        rpassword:""
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
        password:"",
        rpassword:""
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
    this.clearForm();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <label htmlFor="Username">User Name : </label>
          <input
            type="text"
            name="username"
            value={this.state.employee.username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="fname">Email : </label>
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
            type="password"
            name="password"
            value={this.state.employee.password}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="rpassword">Last Name : </label>
          <input
            type="password"
            name="rpassword"
            value={this.state.employee.rpassword}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          {this.state.isEdit ? (
            <button onClick={this.updateEmp} type="button">
              Update User
            </button>
          ) : (
            <button onClick={this.addEmp} type="button">
              Add User
            </button>
          )}
        </form>
        <ul>
          {this.props.users.map((emp, i) => (
            <li
              style={{ margin: 5, cursor: "pointer" }}
              key={i}
              onClick={() => {
                this.setState({ employee: emp, isEdit: true });
              }}
            >
              {emp.email}- {emp.fname} - {emp.lname}
              <span
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "grey",
                  padding: 2,
                  color: "white",
                  marginLeft:10
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

function mapStateToProps(state) {
  console.log("Store is : ", state);
  return {
    employees: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteEmployee: (emp) => dispatch(deleteEmpAction(emp)),
    addEmp: (emp) => dispatch(addEmpAction(emp)),
    udpateEmpFunc: (emp) => dispatch(updateEmpAction(emp)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users); 
