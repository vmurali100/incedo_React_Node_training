import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmpAction, deleteEmpAction, updateEmpAction } from "../actions";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        username: "",
        name: "",
        passwd: "",
        repeat_paswd: ""
      },
      isEdit: false,
    };
  }

  handleDelete = (emp) => {
    this.props.deleteEmployee(emp);
  };
  addEmp = () => {
    console.log(this.state.Form);
    this.props.addEmp(this.state.Form);
    this.clearForm();
  };
  clearForm = () => {
    this.setState({
      employee: {
        username: "",
        name: "",
        passwd: "",
        repeat_paswd: ""
      },
    });
  };
  handleChange = (e) => {
    let newEmp = { ...this.state.Form };
    newEmp[e.target.name] = e.target.value;
    this.setState({ employee: newEmp });
  };

  updateEmp = () => {
    this.props.udpateEmpFunc(this.state.Form);
    // this.clearForm();
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
            value={this.state.Form.username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            value={this.state.Form.name}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="passwd">Password : </label>
          <input
            type="text"
            name="passwd"
            value={this.state.Form.email}
            disabled={this.state.isEdit ? true : false}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="repeat_passwd">Repeat Password : </label>
          <input
            type="text"
            name="repeat_passwd"
            value={this.state.Form.repeat_passwd}
            disabled={this.state.isEdit ? true : false}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
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
export default Form;
       {/* <ul>
          {this.props.employees.map((emp, i) => (
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
export default connect(mapStateToProps, mapDispatchToProps)(Employees); // */}