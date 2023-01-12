import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUserAsync } from '../store/dataSlice';
import { useNavigate } from 'react-router-dom';

const AddUserForm = () =>{
    const [user,setUser] = useState({fname:"",lname:"",username:"",email:""});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange=(e)=>{
        var newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    const handleSubmit = async () =>{
        const data = await dispatch(addUserAsync(user));
        navigate("/");
    }

  return (
    <div>
      <form action="">
        <div>
            <label htmlFor="">fname</label>
            <input type="text" name="fname" onChange={(e)=>handleChange(e)} value={user.fname} />
        </div>
        <div>
            <label htmlFor="">lname</label>
            <input type="text" name="lname" value={user.lname} onChange={(e)=>handleChange(e)} />
        </div>
        <div>
            <label htmlFor="">username</label>
            <input type="text" name="username" value={user.username} onChange={(e)=>handleChange(e)} />
        </div>
        <div>
            <label htmlFor="">email</label>
            <input type="email" name="email" value={user.email} onChange={(e)=>handleChange(e)} />
        </div>
        <button type='button' onClick={()=>handleSubmit()}>submit</button>
      </form>
    </div>
  )
}

export default AddUserForm;