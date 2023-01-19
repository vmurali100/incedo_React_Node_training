import React from "react";

const UserForm=({user,handleChange,handleSubmit})=>{
   return(
    <div>
        <form>
            <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" value={user.name} name="name" onChange={(e)=>{handleChange(e)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="text" value={user.email} name="email" onChange={(e)=>{handleChange(e)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="mobileno">Mobile No</label>
                <input type="text" value={user.mobileno} name="mobileno" onChange={(e)=>{handleChange(e)}}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
   );
}

export default UserForm;