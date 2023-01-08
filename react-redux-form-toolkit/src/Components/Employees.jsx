import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUsersAsyncAction,deleteUsersAsyncAction, getUsersAsyncAction, updateUsersAsyncAction } from "../store/employeeSlice";

const Employees = () => {

const [employee, setEmployee] = useState({username:'',name:'',email:'',stack:''})
const[isEdit, setIsEdit] = useState(false);
const employeeDetails = useSelector((state)=> state.employees);
const dispatch = useDispatch();

useEffect(()=>{
dispatch(getUsersAsyncAction())
},[])

const handleDelete =(id)=>{
    dispatch(deleteUsersAsyncAction(id));
    console.log(id)
}

const handleAdd = (employee) => {
    dispatch(addUsersAsyncAction(employee))
}

const handleChange = (e) => {
    let newEmp = {...employee};
    newEmp[e.target.name]=e.target.value;
    setEmployee(newEmp);
    }

const handleEdit = (emp) => {
    setIsEdit(true);
    setEmployee(emp)
    console.log(emp)
}

const updateUser = (employee)=>{
    dispatch(updateUsersAsyncAction(employee));
}

return (
    <div>
         <form>
            <label htmlFor="username">Username : </label>
            <input type="text" value={employee.username} name="username" onChange={(e)=>{handleChange(e)}}></input><br/>
            <label htmlFor="name">Name : </label>
            <input type="text" value={employee.name} name="name" onChange={(e)=>{handleChange(e)}}></input><br/>
            <label htmlFor="email">Email : </label>
            <input type="text" value={employee.email} name="email" onChange={(e)=>{handleChange(e)}}></input><br/>
            <label htmlFor="stack">Tech Stack : </label>
            <input type="text" value={employee.stack} name="stack" onChange={(e)=>{handleChange(e)}}></input><br />
            {isEdit? (<button onClick={()=>{updateUser(employee)}}>Update</button>) :(<button onClick={()=>{handleAdd(employee)}}>Register</button>)}
        </form>

        <h2>Employee Details</h2><br />
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
                <td><button onClick={()=>{handleEdit(usr)}}>Edit</button></td>
                <td><button onClick={()=>{handleDelete(usr.id)}}>Delete</button></td>
            </tr>
                ))}   
            </tbody>
        </table>
    </div>
)



}

export default Employees