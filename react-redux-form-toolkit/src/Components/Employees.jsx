import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUsersAsyncAction, deleteEmployee, getUsersAsyncAction } from "../store/employeeSlice";

const Employees = () => {

const employeeDetails = useSelector((state)=> state.employees);
const dispatch = useDispatch();

useEffect(()=>{
dispatch(getUsersAsyncAction())
},[])

const handleDelete =(i)=>{
    dispatch(deleteEmployee(i));
    console.log(i)
}

const handleAdd = () => {
    dispatch(addUsersAsyncAction())
}

return (
    <div>
        <h2>Employee Details</h2><br />
        <button onClick={()=>{handleAdd()}}>Add Employee</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Tech Stack</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {employeeDetails.employees.map((usr,i)=>(
                <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.username}</td>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.stack}</td>
                <td><button>Edit</button></td>
                <td><button onClick={()=>{handleDelete(i)}}>Delete</button></td>
            </tr>
                ))}   
            </tbody>
        </table>
    </div>
)



}

export default Employees