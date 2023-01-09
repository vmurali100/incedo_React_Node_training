import React, { useState } from 'react'

export const Funcform = ({user,handleChange,handleSubmit,clearForm, editIndex, updateUser}) => {

    
  return (
    <div>
        <form>
            <label htmlFor="First Name">First Name</label>
            <br/>
            <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleChange(e)}}/> <br/> <br/>
            <label htmlFor="Last Name">Last Name</label><br/>
            <input type="text" name="lname" value={user.lname} onChange={(e)=>{handleChange(e)}}/><br/><br/>
            <label htmlFor="Email">Email</label><br/>
            <input type="email" name="email" value={user.email} onChange={(e)=>{handleChange(e)}}/><br/><br/>
            <label htmlFor="User Name">User Name</label><br/>
            <input type="text" name="uname" value={user.uname} onChange={(e)=>{handleChange(e)}}/><br/><br/>
            <label htmlFor="Enter Password">Enter Password</label><br/>
            <input type="password" name="enterpass" value={user.enterpass} onChange={(e)=>{handleChange(e)}}/><br/><br/>
            <label htmlFor="Confirm Password">Confirm Password</label><br/>
            <input type="password" name="confirmpass" value={user.confirmpass} onChange={(e)=>{handleChange(e)}}/><br/><br/>
            {editIndex !== null ? <button type="button" onClick={updateUser}>Update User</button>
            :<button type="button" onClick={handleSubmit}>Register</button>}

        </form>
    </div>
  );
};
