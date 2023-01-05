import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, delUser, updateUser } from '../actions'

class EmpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employee: {
                fname: "",
                lname: "",
                email: ""
            },
            isTrue:false

        }
    }

    handleChange = (e) => {
        var newEmp = { ...this.state.employee };
        newEmp[e.target.name] = e.target.value;
        this.setState({ employee: newEmp })
    }
    handleSubmit=()=>{
        this.props.addEmp(this.state.employee);
        this.clearForm();
    }
    clearForm=()=>{
        this.setState({employee:{
            fname: "",
            lname: "",
            email: ""
        }})
    }
    handleEdit=(emp)=>{
        this.setState({employee:emp,isTrue:true});
    }
    handleEditInStore=()=>{
        this.props.updateEmp(this.state.employee);
        console.log(this.state.employee);
        this.clearForm();
        this.setState({isTrue:false});
    }
    handleDelete=(emp)=>{
        this.props.delEmp(emp);
    }
    render() {
        return (
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                        <input type="text" name="fname" className="form-control" value={this.state.employee.fname} onChange={(e) => { this.handleChange(e) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                        <input type="text" name="lname" className="form-control" value={this.state.employee.lname} onChange={(e) => { this.handleChange(e) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" value={this.state.employee.email} disabled={this.state.isTrue} onChange={(e) => { this.handleChange(e) }} />
                    </div>
                    {this.state.isTrue?<button type="button" className="btn btn-warning" onClick={this.handleEditInStore}>Edit</button>
                    :<button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>}
                </form>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map((emp,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{emp.fname}</td>
                                <td>{emp.lname}</td>
                                <td>{emp.email}</td>
                                <td><button type='button' className='btn btn-warning' onClick={()=>{this.handleEdit(emp)}}>Edit</button></td>
                                <td><button type='button' className='btn btn-danger' onClick={()=>{this.handleDelete(emp)}}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        employees: state.employees,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addEmp: (emp) => dispatch(addUser(emp)),
        delEmp: (emp) => dispatch(delUser(emp)),
        updateEmp: (emp) => dispatch(updateUser(emp))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmpForm);