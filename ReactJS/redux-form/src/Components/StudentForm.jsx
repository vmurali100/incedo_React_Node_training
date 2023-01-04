import React, { Component } from "react";
import { connect } from "react-redux";
import { addStdAction, deleteStdAction, updateStdAction } from "../actions";

class StudentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            student: {
                userName: "",
                email: "",
                password: "",
            },
            isEdit: false,
        };
    }

    handleDelete = (std) => {
        //from here i will trigger an action
        this.props.deleteEmployee(emp);
    };
    addStd = () => {
        console.log(this.state.student);
        this.props.addEmp(this.state.student);
        this.clearForm();
    };
    clearForm = () => {
        this.setState({
            student: {
                fname: "",
                lname: "",
                email: "",
            },
        });
    };
    handleChange = (e) => {
        let newEmp = { ...this.state.student };
        newEmp[e.target.name] = e.target.value;
        this.setState({ student: newEmp });
    };

    updateEmp = () => {
        this.props.udpateEmpFunc(this.state.student);
        // this.clearForm();
    };
    render() {
        console.log(this.props);
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">user Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.props.students.userName} onClick= {() => {}} placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.props.students.email} onClick= {() => {}} placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={this.props.students.email} placeholder="Password"></input>
                    </div>
                    <button onClick= {() => {}} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
// Map State to Props contains access to the Store ... And Helps to retrive the required Data ..
function mapStateToProps(state) {
    console.log("Store is : ", state);
    return {
        students: state.students,
    };
}
// This function will receive an dispatch Method and help to trigger the actions
function mapDispatchToProps(dispatch) {
    return {
        deletestd: (emp) => dispatch(deleteStdAction(emp)),
        addstd: (emp) => dispatch(addStdAction(emp)),
        udpatestd: (emp) => dispatch(updateStdAction(emp)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentForm); //
