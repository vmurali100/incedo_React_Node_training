import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, addUserAsyncAction, delUserAsyncAction, getAllUsersAction } from '../store/slice';
const Registration = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllUsersAction());
  },[dispatch]);
  const allUsers = useSelector((state) => state.users.users);
  var[user,setUser]=useState({fname:"", lname:"", email:""});
  const handleSubmit=()=>{
    dispatch(addUserAsyncAction(user));
  }

  const handleDeleteAsync=(user)=>{
    dispatch(delUserAsyncAction(user));
  }

  const handleChange=(e)=>{
    var newUser={...user};
    newUser[e.target.name]=e.target.value;
    setUser(newUser);
  }
  const handleAdd=()=>{
    dispatch(addUserAsyncAction({
      id:null, fname:"harsha",lname:"mama",email:"har@mail.com"
    }));
  }
  return (
    <div>
      <form>
        <button type='button' onClick={()=>handleAdd()}>addUser</button>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
          <input type="text" name="fname" className="form-control" onChange={(e)=>handleChange(e)} value={user.fname} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
          <input type="text" name="lname" className="form-control" onChange={(e)=>handleChange(e)} value={user.lname} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" name="email" className="form-control" onChange={(e)=>handleChange(e)}   value={user.email} />
        </div>
        <button type='button' onClick={()=>handleSubmit()}>submit</button>
      </form>
      <ul>
        {allUsers.map((user, i) => (<li key={i} onClick={()=>setUser(user)}>{user.fname}-{user.lname}-{user.email}
        <button type='button' onClick={()=>handleDeleteAsync(user)}>delete</button></li>)
            
        )}
      </ul>
    </div>
  )
}

export default Registration
