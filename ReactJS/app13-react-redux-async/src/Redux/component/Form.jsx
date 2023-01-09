import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, delUser, updUser } from '../actions'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                fname: "",
                lname: "",
                gender: "",
            },
            isTrue: false,
        }
    }

    handleChange=(e)=>{
        var newUser = {...this.state.user};
        newUser[e.target.name]=e.target.value;
        this.setState({user:newUser});
    }

    handleSubmit=()=>{
        this.props.addUserFunction(this.state.user);
        this.clearForm();
    }

    handleEdit=(usr)=>{
        this.setState({user:usr,isTrue:true});
    }

    handleFinalEdit=()=>{
        this.props.updUserFunction(this.state.user);
        this.setState({isTrue:false});
        this.clearForm();
    }

    handleDelete=(usr)=>{
        this.props.delUserFunction(usr);
    }

    clearForm=()=>{
        this.setState({
            fname: "",
            lname: "",
            gender: "",
        });
    }
    render() {
        return (
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                        <input type="text" name="fname" className="form-control" value={this.state.user.fname} disabled={this.state.isTrue} onChange={(e) => { this.handleChange(e) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                        <input type="text" name="lname" className="form-control" value={this.state.user.lname} onChange={(e) => { this.handleChange(e) }} />
                    </div>
                    <div>
                        <label htmlFor="" className='form-label'>Gender</label>
                        <input type="text" name="gender" className="form-control" value={this.state.user.gender} onChange={(e) =>{this.handleChange(e) }} />
                    </div>
                    {
                        this.state.isTrue? <button type="button" className='btn btn-info' onClick={()=>this.handleFinalEdit()}>Edit</button>
                        : <button type='button' className='btn btn-primary' onClick={()=>this.handleSubmit()}>Submit</button>
                    }
                </form>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>fname</th>
                            <th>lname</th>
                            <th>gender</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.Users.map((emp,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{emp.fname}</td>
                                <td>{emp.lname}</td>
                                <td>{emp.gender}</td>
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
        Users: state.users,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addUserFunction: (emp) => dispatch(addUser(emp)),
        delUserFunction: (emp) => dispatch(delUser(emp)),
        updUserFunction: (emp) => dispatch(updUser(emp))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);