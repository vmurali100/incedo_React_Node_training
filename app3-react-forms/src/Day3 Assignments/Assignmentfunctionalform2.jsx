import React, { Component } from "react";
import '../Styling/assignmentform2.css'
import {useState} from 'react';

const AssignmentFunctionalForm2 = ()=>{

    const [stObject,setStObject] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        shortbio: ""
    });

    const handleChange=(e)=>{
        console.log(e.target.name+" "+e.target.value);
        this.setState({...stObject,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e)=>{
        console.log(stObject);
        this.clearForm();
    }

    const clearForm = ()=>{
        setStObject({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            shortbio: ""
        });
    }
    
        return <>
            <h1>Register</h1>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name" aria-required>Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <input name="firstname" id="firstname" type="text" onChange={(e)=>{handleChange(e)}} value={stObject.firstname} className="form-control" />
                            <div className="form-text">First</div>
                        </div>
                        <div className="col-4">
                        <input name="lastname" id="lastname" type="text" onChange={(e)=>{handleChange(e)}} value={stObject.lastname} className="form-control" />
                        <div className="form-text">Last</div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <label htmlFor="username" aria-required>UserName</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <input name="username" id="username" type="text" onChange={(e)=>{handleChange(e)}} value={stObject.username} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <label htmlFor="email" aria-required>Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <input name="email" id="email" type="text" onChange={(e)=>{handleChange(e)}} value={stObject.email} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <label htmlFor="password" aria-required>Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <input name="password" id="password" type="password" onChange={(e)=>{handleChange(e)}} value={stObject.password} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                            <label htmlFor="shortbio" aria-required>Short Bio</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <textarea name="shortbio" id="shortbio" type="text" onChange={(e)=>{handleChange(e)}} value={stObject.shortbio} className="form-control" />
                        </div>
                    </div>
                </div>
               
            </form><br/>
            <center><button onClick={()=>handleSubmit()} className="btn btn-primary">Submit</button></center>
        </>

};

export default AssignmentFunctionalForm2;