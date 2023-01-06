import React,{Component} from 'react';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getDevelopersInDbJson,postDevelopersInDbJson} from '../Store/UserSlice';

const ReduxToolKitRegister = ()=>
{
    const [employee,setEmployee] = useState({username:'',fname:'',lname:'',email:'',password:'',programinglang:''});
    console.log(employee);
    const [isEdit,setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const reduxDeveloper = useSelector((state)=>state.users.users);
    const reduxIsEdit = useSelector((state)=>state.developers.isEdit);
    
    useEffect(()=>{
       console.log(reduxDeveloper);
       dispatch(getUsers());
       setEmployee(reduxDeveloper);
       setIsEdit(reduxIsEdit);
    },[reduxDeveloper])
        
    const handleChange = (e)=>{

        var newEmp = {...employee};
        newEmp[e.target.name] = e.target.value;
        setEmployee(newEmp);
    }

    const handleSubmit = (e)=>{
       console.log("Inside handle submit");
       e.preventDefault();
       console.log("inside handle Submit");
       dispatch(postUsers(employee));
       clearForm();
    }

    const clearForm = ()=>{
        setEmployee({username:'',fname:'',lname:'',email:'', password:""});
    }


    
        return <>
               <h1>Registration</h1>
               <form>
                <label htmlFor='username'>Username:</label>
                <input type="text" name="username" id="username" onChange={(e)=>{handleChange(e)}} value={employee.username}/><br/><br/>
                <label htmlFor='fname'>Firstname:</label>
                <input type="text" name="fname" id="fname" onChange={(e)=>{handleChange(e)}} value={employee.fname}/><br/><br/>
                <label htmlFor='lname'>Lastname:</label>
                <input type="text" name="lname" id="lname" onChange={(e)=>{handleChange(e)}} value={employee.lname} /><br/><br/>
                <label htmlFor='email'>Email:</label>
                <input type="text" name="email" id="email" onChange={(e)=>{handleChange(e)}} value={employee.email} disabled={isEdit}/><br/><br/>
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" id="password" onChange={(e)=>{handleChange(e)}} value={employee.password}/><br/><br/>
               <button type="button" className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>AddEmployee</button>
               </form>
               </>
};

export default ReduxToolKitRegister;