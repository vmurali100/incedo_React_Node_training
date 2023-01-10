import React,{Component} from 'react';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRegisteredUser,updateRegisteredUser } from '../ReduxToolKit/registerslice';

const RegistrationForm = ()=>{

    const [userDetails,setUserDetails] = useState({username:"",company:"",email:"",phone:"",subject:""});
     
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.registeredusers.registerUser);
    const isEdit = useSelector((state)=>state.registeredusers.isEdit);

     useEffect(()=>{
      setUserDetails(user);
     },[user]);

    const handleChange = (e)=>{
        var newuserDetails = {...userDetails};
        newuserDetails[e.target.name] = e.target.value;
        setUserDetails(newuserDetails);

    }
    
    const handleUpdate = async ()=>{
       await dispatch(updateRegisteredUser(userDetails));
       clearForm();

    }
    const handleSubmit = async ()=>{
        //send data to express api;
        // await axios.post("http://localhost:3002/registerUsers/save",userDetails).then((res)=>{console.log(res.data)});
        dispatch(postRegisteredUser(userDetails));
        console.log(userDetails);
        clearForm();
    }

    const clearForm = ()=>{
        setUserDetails({username:"",company:"",email:"",phone:"",subject:""});
    }

    const handlefindall = async ()=>{
        //get data from database
        // await axios.get("http://localhost:3002/registerUsers/get").then((res)=>{console.log(res)});
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
            {isEdit ? <button type="button" onClick={()=>{handleUpdate()}}>Update</button>:<button type="button" onClick={()=>handleSubmit()} className="btn btn-primary">Save User</button>}
            {/* <br/><br/>
            <button type="button" onClick={()=>handlefindall()} className="btn btn-primary">findallusersUser</button> */}
           </form>
           </>
};

export default RegistrationForm;