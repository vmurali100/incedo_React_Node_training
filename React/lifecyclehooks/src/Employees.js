import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEmpAction,addEmpAction,updateEmpAction } from "../../app01/src/Actions";


class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        username: "",
        email: "",
        password: "",
        repeatpassword: ""
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
        repeatpassword: ""
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
          <label htmlFor="username">User Name : </label>
          <input
            type="text"
            name="username"
            value={this.state.employee.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            value={this.state.employee.email}
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
           <label htmlFor="repeatpassword"> Repeat Password : </label>
          <input
            type="text"
            name="repeatpassword"
            value={this.state.employee.repeatpassword}
           
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
              Register
            </button>
          )}
        </form>
        
                
               
      </div>
    );
  }
}
// Map State to Props contains access to the Store ... And Helps to retrive the required Data ..

export default Employees //