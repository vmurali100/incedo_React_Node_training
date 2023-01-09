import React from "react";
import { Component } from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addUserAsyncAction } from "../store/usersSlice";
const Registration = () => {
    const [user, setUser] = useState({ fname: "", lname: "", email: "", confirmemail: "", username : "", password: "", confirmpassword: "" });
    const usersDetails = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
      };
      const handleSubmit = () => {
        dispatch(
            addUserAsyncAction(user)
          );
        
      };

     
        
        return(
            <div class="card" style={{width:'100%',height:"100%"}}>
                <form>
                <div class="p-3 mb-2 bg-info text-white" style={{textAlign:"left",borderRadius:"50px solid black",fontWeight:"bold"}}>User Registration Form <br/>
                Please complete the following form to register on our site. Thanks
                </div>
                <div class="card-body">
    <div className="row" style={{textAlign:"left"}}>
    <label for="name" className="form-label" style={{color:"#0A0A0A",fontWeight: "bold",marginTop:"20px"}}>
            Name
          </label>
        <div className="col-6">
          <input type="text" className="form-control" name="fname" value={user.fname} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="col-6">
          <input type="text" className="form-control" name="lname" value={user.lname} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="col-6">
          <span>First</span>
        </div>
        <div className="col-6">
          <span>Last</span>
        </div>
        <label for="exampleInputtext1" className="form-label" style={{color:"#0A0A0A",fontWeight: "bold",marginTop:"20px"}}>
            Email
          </label>
        <div className="col-6">
          <input type="text" className="form-control" name="email" value={user.email} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="col-6">
          <input type="text" className="form-control" name="confirmemail" value={user.confirmemail} onChange={(e) =>handleChange(e)}/>
        </div>
        <div className="col-6">
          <span>Enter Email</span>
        </div>
        <div className="col-6">
          <span>Confirm Email</span>
        </div>
        <label for="exampleInputtext1" className="form-label" name="username" style={{color:"#0A0A0A",fontWeight: "bold",marginTop:"20px"}}>
            Username
          </label>
        <div className="col-6">
          <input type="text" className="form-control" name="username" value={user.username} onChange={(e) =>handleChange(e)}/>
        </div>
        <label for="exampleInputtext1" className="form-label" style={{color:"#0A0A0A",fontWeight: "bold",marginTop:"20px"}}>
            Password
          </label>
        <div className="col-6">
          <input type="text" className="form-control" name="password" value={user.password} onChange={(e) =>handleChange(e)}/>
        </div>
        <div className="col-6">
          <input type="text" className="form-control" name="confirmpassword" value={user.confirmpassword} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="col-6">
          <span>Enter Password</span>
        </div>
        <div className="col-6">
          <span>Confirm Password</span>
        </div>
        <button
            type="button"
            className="btn btn-primary"
            style={{width:"10%",marginTop:"20px"}}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
    </div>
    </form>
  </div>
        )
    
}
export default Registration