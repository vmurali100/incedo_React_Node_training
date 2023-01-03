import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmpAction, deleteEmpAction, updateEmpAction } from "../actions";

class Register extends Component {
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

  handleDelete = (reg) => {
    
    this.props.deleteEmployee(reg);
  };
  addreg = () => {
    console.log(this.state.register);
    this.props.addreg(this.state.register);
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
    let newEmp = { ...this.state.register };
    newreg[e.target.name] = e.target.value;
    this.setState({ employee: newreg });
  };

  updatereg = () => {
    this.props.udpateregFunc(this.state.register);
   
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
            name="fname"
            value={this.state.register.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="email"
            value={this.state.register.email}
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
            value={this.state.register.password}
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
            value={this.state.register.password}
            disabled={this.state.isEdit ? true : false}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          {this.state.isEdit ? (
            <button onClick={this.updatereg} type="button">
              Update Employee
            </button>
          ) : (
            <button onClick={this.addreg} type="button">
              Add Employee
            </button>
          )}
        </form>
        <ul>
          {this.props.register.map((reg, i) => (
            <li
              style={{ margin: 5, cursor: "pointer" }}
              key={i}
              onClick={() => {
                this.setState({ register: rg, isEdit: true });
              }}
            >
              {reg.email}- {reg.fname} - {reg.lname}
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
                  this.handleDelete(reg);
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
    registers: state.registers;
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteEmployee: (reg) => dispatch(deleteEmpAction(reg)),
    addEmp: (reg) => dispatch(addEmpAction(reg)),
    udpateEmpFunc: (reg) => dispatch(updateEmpAction(reg)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Register); 
