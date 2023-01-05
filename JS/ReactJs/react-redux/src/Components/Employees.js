import React, { Component } from "react";
import {connect} from "react-redux";
import { deleteEmpAction } from "../actions";
class Employees extends Component {
    constructor(props){
        super(props)
        this.state={
            empName:""
        }
    }
    handleDelete=(emp)=>{
        this.props.deleteEmployee(emp)

    }
    addEmp=(emp)=>{
        
    }
  
 
 
  render() {
    return (
      <div>
        <input type="text" onChange={(e)=>{this.setState({empName:e.target.value})}} /><button onClick={this.addEmp}>Add Employee</button>
        <ul>
        {this.props.employees.map((emp,i)=><li key={i} onClick={()=>{this.handleDelete(emp)}}>{emp}</li>)}
        </ul>
               
      </div>
    );
  }
}
function mapStateToProps(state){
    return{
        employees:state.employees,
    }
}
function mapDispatchToProps(dispatch){
    return{
        deleteEmployee:(emp)=>dispatch(deleteEmpAction(emp))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Employees); //