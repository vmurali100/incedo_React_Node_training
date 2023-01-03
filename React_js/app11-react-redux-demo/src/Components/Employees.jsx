import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmpAction, deleteEmpAction } from "../actions";

class Employees extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       empName:""
    }
  }
  
  handleDelete = (emp) => {
    //from here i will trigger an action
    this.props.deleteEmployee(emp)
  };
  addEmp=()=>{
    this.props.addEmp(this.state.empName)
    this.clearForm()
  }
  clearForm=()=>{
    this.setState({empName:""})
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <input type="text" value={this.state.empName} onChange={(e)=>{this.setState({empName:e.target.value})}}/> <button onClick={this.addEmp}> Add Employee</button>
        <ul>
          {this.props.employees.map((emp, i) => (
            <li
              key={i}
              onClick={() => {
                this.handleDelete(emp);
              }}
            >
              {emp}
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
    addEmp:(emp)=>dispatch(addEmpAction(emp))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Employees); //
