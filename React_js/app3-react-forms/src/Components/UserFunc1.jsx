import React from "react";
import { useState } from "react";
import '../Css/UserFunc1.css'
const UserFunc1 = () => {
    // WE can declare a Variable , and a function to manipulate that variable ;
    //   const [age, setAge] = useState(40);
    const [user, setUser] = useState({ fname: "", lname: "", email: "", username: "", password: "", password1: "" });
    const handleSubmit = () => {
        console.log(user);
        clearForm()
    };
    const handleChange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    };
    const clearForm = () => {
        setUser({ fname: "", lname: "", email: "", username: "", password: "", password1: "" })
    }
    return (
        <div style={{ 'backgroundColor': 'lightblue' }}>
            <div><h1 className="inputfield" style={{ 'font-size': '40px', 'textAlign': 'center' }}>WELCOME TO BAELDUNG</h1></div>
            <form className="form-style inputfield">
                <div><h5 style={{ 'font-size': '30px', 'textAlign': 'center' }}>Register</h5></div>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input type="text" className="form-control border" value={user.fname} name="fname"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div className="mb-3 field">
                    <label htmlFor="lname" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.lname}
                        name="lname"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        value={user.email}
                        name="email"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        User Name
                    </label>
                    <input type="text" className="form-control" value={user.username} name="username"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Enter Password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.password}
                        name="password"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div className="mb-3"> <label htmlFor="password1" className="form-label">
                    Confirm Password
                </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.password1}
                        name="password1"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <a href="#" style={{ "text-decoration": "none" }}> &larr;Back to Login </a>
                <br />
                <br />
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ "width": "500px" }}
                    onClick={handleSubmit}
                >
                    Register
                </button>
                <br />
                <br />
            </form>
            <br />
            <br />
        </div>
    );
};
export default UserFunc1;