import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserAction, deleteUserAction, updateUserAction } from "../actions";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fname: "",
                lname: "",
                email: "",
            },
            isEdit: false,
        };
    }
    handleDelete = (usr) => {
        this.props.deleteUser(usr);
    };
    addTheUser = () => {
        this.props.addUser(this.state.user);
        this.clearForm();
    };
    handleUpdate = () => {
        this.props.updateUser(this.state.user);
        this.clearForm();
    }
    clearForm = () => {
        this.setState({
            user: {
                fname: "",
                lname: "",
                email: "",
            },
        });
    };

    handleChange = (e) => {
        let newUser = {...this.state.user};
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser });
    };
    render() {
        console.log(this.props);
        return (
            <div>
                <form action="">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => { this.handleChange(e) }} />{" "} <br />
                    <label htmlFor="lname">Last Name : </label>
                    <input
                        type="text"
                        name="lname"
                        value={this.state.user.lname}
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />{" "}
                    <br />
                    <label htmlFor="fname">Email : </label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.user.email}
                        disabled={this.state.isEdit ? true : false}
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />{" "}
                    <br />
                    {this.state.isEdit ? (
                        <button onClick={this.handleUpdate} type="button">
                            Update Employee
                        </button>
                    ) : (
                        <button onClick={this.addTheUser} type="button">
                            Add Employee
                        </button>
                    )}
                </form>
                <ul>
                    {this.props.users.map((emp, i) => (
                        <li
                            style={{ margin: 5, cursor: "pointer" }}
                            key={i}
                            onClick={() => {
                                this.setState({ user: emp, isEdit: true });
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
                                    marginLeft: 10
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
        )
    }
}


function mapStateToProps(state) {
    console.log("Store is : " + state);
    return { users: state.users };

}

function mapDispatchToProps(dispatch) {
    return {
        deleteUser: (usr) => dispatch(deleteUserAction(usr)),
        addUser: (usr) => dispatch(addUserAction(usr)),
        updateUser: (usr) => dispatch(updateUserAction(usr))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);