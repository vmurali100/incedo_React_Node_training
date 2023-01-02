import React, { Component } from "react";
import { connect } from "react-redux";

class Employees extends Component {
  render() {
    console.log(this.props);
    return <div>
        <ul>
            {this.props.employees.map((emp,i)=> <li key={i}>{emp}</li> )}
        </ul>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    employees: state,
  };
}
export default connect(mapStateToProps)(Employees);