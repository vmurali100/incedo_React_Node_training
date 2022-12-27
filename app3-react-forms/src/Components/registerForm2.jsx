import { useState } from 'react';
import '../Styling/registerform.css';

const RegisterForm2 = () => {
    const [user, setUser] = useState({ fname: "", lname: "", email: "", username: "", password: "", confirmpassword: "" });
    const handleSubmit = () => {
        console.log(user);
        clearForm();
    };
    const handleChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })

    };
    const clearForm = () => {
        setUser({ fname: "", lname: "", email: "", username: "", password: "", confirmpassword: "" });
    }

    return <>
        <h1>Register Form In Functional Components</h1>
        <form>
            <label htmlFor="fname">First Name</label><br />
            <input id="fname" name="fname" type="text" onChange={(e) => { handleChange(e) }} value={user.fname} /><br /><br />
            <label htmlFor="lname">Last Name</label><br />
            <input id="lname" name="lname" type="text" onChange={(e) => { handleChange(e) }} value={user.lname} /><br /><br />
            <label htmlFor="">Email</label><br />
            <input id="email" name="email" type="text" onChange={(e) => { handleChange(e) }} value={user.email} /><br /><br />
            <label htmlFor="username">Username</label><br />
            <input id="username" name="username" type="text" onChange={(e) => { handleChange(e) }} value={user.username} /><br /><br />
            <label htmlFor="password">Enter Password</label><br />
            <input id="password" name="password" type="password" onChange={(e) => { handleChange(e) }} value={user.password} /><br /><br />
            <label htmlFor="confirmpassword">Confirm Password</label><br />
            <input id="confirmpassword" name="confirmpassword" type="password" onChange={(e) => { handleChange(e) }} value={user.confirmpassword} /><br /><br />
            <center><button type="button" className="btn btn-primary" onClick={() => { handleSubmit() }}>Register User</button></center>
        </form>
    </>
};

export default RegisterForm2;