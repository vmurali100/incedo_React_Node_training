import React, { useState } from 'react'

export default function Userinfn2() {
    const [user, setuser] = useState({
        fname: "",
        lname: "",
        email: "",
        username: "",
        Enterpwd: "",
        Confirmpwd: ""
    })
    onsubmit = () => {
        console.log(user);
        // clearform()
    }
    const handlechange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setuser(newUser);
    };
    // clearform=()=>{
    //     setuser({fname:"",
    //     lname:"",
    //     email:"",
    //     username:"",
    //     Enterpwd:"",
    //     Confirmpwd:""})
    // }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className='form-control' onChange={(e) => handlechange(e)} value={user.fname} name='fname' />
                </div>
                <div className="mb-3">
                    <label className="form-label">last Name</label>
                    <input type="text" className='form-control' onChange={(e) => handlechange(e)} value={user.lname} name="lname" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className='form-control' onChange={(e) => handlechange(e)} value={user.email} name="email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className='form-control' onChange={(e) => handlechange(e)} value={user.username} name="username" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Password</label>
                    <input type="password" className='form-control' onChange={(e) => handlechange(e)} value={user.Enterpwd} name="Enterpwd" />
                </div>
                <div className="mb-3">
                    <label className="form-label">confirm Password</label>
                    <input type="password" className='form-control' onChange={(e) => handlechange(e)} value={user.Confirmpwd} name="Confirmpwd" />
                </div>
                <button type="button" className="btn btn-primary" onClick={onsubmit}>Submit</button>
            </form>
        </div>
    )
       

}
