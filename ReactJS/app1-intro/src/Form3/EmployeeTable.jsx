import React from "react";

const EmployeeTable=({Employees,editEmployee,deleteEmployee})=>{
   console.log(Employees)
   return(
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Employee Code</th>
                    <th>Email ID</th>
                </tr>
            </thead>
            <tbody>
                  {Employees.map((employee,i)=>
                     <tr>
                        <td>{employee.empname}</td>
                        <td>{employee.empcode}</td>
                        <td>{employee.email}</td>
                        <td><button className="btn btn-warning" onClick={()=>{editEmployee(employee,i)}}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={()=>{deleteEmployee(employee)}}>Delete</button></td>
                     </tr>
                  )}
            </tbody>
        </table>
    </div>
   );
}

export default EmployeeTable;