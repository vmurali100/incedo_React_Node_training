import React, { useState } from 'react'

export const Funcform = ({user,handleChange,editIndex,updateUser,handleSubmit}) => {

    
  return (
    <div className='container'>
        <form>
            <label htmlFor="First Name">First Name</label>
            <br/>
            <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleChange(e)}}/> <br/> <br/>
            <label htmlFor="Last Name">Last Name</label><br/>
            <input type="text" name="lname" value={user.lname} onChange={(e)=>{handleChange(e)}}/><br/><br/>
            <label htmlFor="Email">Email</label><br/>
            <input type="email" name="email" value={user.email} onChange={(e)=>{handleChange(e)}}/><br/><br/>
           
            <button type="button" onClick={handleSubmit}>Register</button>

        </form>
    </div>
  );
};
