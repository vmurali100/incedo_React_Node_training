import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editUserAsync } from '../store/dataSlice';

export default function EditUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data,setData] = useState({fname:"",lname:"",username:"",email:""});
    const {state} = useLocation();
    useEffect(()=>{
        console.log(state);
        setData(state);
    },[])

    const handleChange = (e) =>{
        var newData = {...data};
        newData[e.target.name] = e.target.value;
        setData(newData);
    }

    const handleSubmit = async () =>{
        let res = await dispatch(editUserAsync(data));
        navigate("/");
    }
  return (
    <div>
      <form action="">
        <div>
            <label htmlFor="">fname</label>
            <input type="text" name="fname" onChange={(e)=>handleChange(e)} value={data.fname} />
        </div>
        <div>
            <label htmlFor="">lname</label>
            <input type="text" name="lname" onChange={(e)=>handleChange(e)} value={data.lname} />
        </div>
        <div>
            <label htmlFor="">username</label>
            <input type="text" name='username' onChange={(e)=>handleChange(e)} value={data.username} />
        </div>
        <div>
            <label htmlFor="">email</label>
            <input type="text" name="email" onChange={(e)=>handleChange(e)} value={data.email} />
        </div>
        <button type='button' onClick={()=>handleSubmit()}>submit</button>
      </form>
    </div>
  )
}
