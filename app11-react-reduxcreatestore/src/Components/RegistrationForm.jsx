import React,{Component} from 'react';
import {useState} from 'react';
import axios from 'axios';

const RegistrationForm = ()=>{

    const [userDetails,setUserDetails] = useState({username:"",company:"",email:"",phone:"",subject:""});

    const handleChange = (e)=>{
        var newuserDetails = {...userDetails};
        newuserDetails[e.target.name] = e.target.value;
        setUserDetails(newuserDetails);

    }

    const handleSubmit = async ()=>{
        //send data to express api;
        await axios.post("http://localhost:3002/registerUsers/save",userDetails).then((res)=>{console.log(res.data)});
        console.log(userDetails);
        clearForm();
    }

    const clearForm = ()=>{
        setUserDetails({username:"",company:"",email:"",phone:"",subject:""});
    }

    const handlefindall = async ()=>{
        //get data from database
        await axios.get("http://localhost:3002/registerUsers/get").then((res)=>{console.log(res)});
    }
    return <>
           <form>
            <label>Name:</label>
            <input type="text" name="username" id="username" value={userDetails.username} onChange={(e)=>handleChange(e)} /><br/><br/>
            <label>Company:</label>
            <input type="text" name="company" id="company" value={userDetails.company} onChange={(e)=>handleChange(e)} /><br/><br/>
            <label>Email:</label>
            <input type="text" name="email" id="email" value={userDetails.email} onChange={(e)=>handleChange(e)} /><br/><br/>
            <label>Phone:</label>
            <input type="text" name="phone" id="phone" value={userDetails.phone} onChange={(e)=>handleChange(e)} /><br/><br/>
            <label>Subject:</label>
            <input type="text" name="subject" id="subject" value={userDetails.subject} onChange={(e)=>handleChange(e)} /><br/><br/>
            <button type="button" onClick={()=>handleSubmit()} className="btn btn-primary">Save User</button><br/><br/>
            <button type="button" onClick={()=>handlefindall()} className="btn btn-primary">findallusersUser</button>
           </form>
           </>
};

export default RegistrationForm;