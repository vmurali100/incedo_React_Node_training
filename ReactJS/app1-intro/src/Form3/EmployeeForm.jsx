import React from "react";

const EmployeeForm=({Employee,handleChange,handleSubmit,editIndex,updateUser})=>{
    return(
        <div>
            <form>
                <div className="mb-3">
                     <label htmlFor="empname" className="form-label">
                      Employee Name
                     </label>
                     <input type="text" className="form-control" value={Employee.empname} name="empname"
                            onChange={(e)=>{handleChange(e)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="empcode">Employee Code</label>
                    <input className="form-control" type="text" value={Employee.empcode} name="empcode" 
                    onChange={(e)=>{handleChange(e)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email ID</label>
                    <input className="form-control" type="email" value={Employee.email} name="email"
                           onChange={(e)=>{handleChange(e)}}/>
                </div>
                {editIndex !==null ? (<button type="button" className="btn btn-primary" onClick={updateUser}>Update User</button> )
                :(<button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>)}
            </form>
        </div>
    );
}

export default EmployeeForm;