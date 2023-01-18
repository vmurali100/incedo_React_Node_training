import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { addUserAction, deleteUserAction, getAllUsersAction, updateUserAction } from "../actions/empAction";
import { useState } from "react";

const Employees = () =>{

const [employee, setEmployee] = useState({username:'',name:'',email:'',stack:''})
const[isEdit, setIsEdit] = useState(false);

const empDetails = useSelector((state)=>state.employees)
const dispatch = useDispatch();

console.log("Details:", empDetails);

useEffect(()=>{
 dispatch(getAllUsersAction())
},[])

const handleDelete = (id) => {
    dispatch(deleteUserAction(id))
    console.log(id)
}

const handleEdit = (usr) => {
    setIsEdit(true);
    setEmployee(usr)
    console.log(usr)
}

const handleAdd = (employee) => {
    dispatch(addUserAction(employee));
    clearForm();
}

const handleChange = (e) => {
let newEmp = {...employee};
newEmp[e.target.name]=e.target.value;
setEmployee(newEmp);
}

const clearForm =()=>{
    setEmployee({username:'',name:'',email:'',stack:''})
}

const updateUser = ()=>{
    dispatch(updateUserAction(employee));
    console.log("update",employee)
    clearForm();
}

return(
    <div>
        <form>
            <label htmlFor="username">Username : </label>
            <input type="text" value={employee.username} name="username" onChange={(e)=>{handleChange(e)}}></input><br/>
            <label htmlFor="name">Name : </label>
            <input type="text" value={employee.name} name="name" onChange={(e)=>{handleChange(e)}}></input><br/>
            <label htmlFor="email">Email : </label>
            <input type="text" value={employee.email} name="email" onChange={(e)=>{handleChange(e)}}></input><br/>
            <label htmlFor="stack">Tech Stack : </label>
            <select name='stack' value={employee.stack} onChange={(e)=>{handleChange(e)}}>
                <option value=''>Choose Tech Stack</option>
                <option value='java'>Java</option>
                <option value='reactjs'>Reactjs</option>
                <option value='python'>Python</option>
                <option value='nodejs'>Nodejs</option>
            </select>
            <br />
            {/* <input type="text" value={employee.stack} name="stack" onChange={(e)=>{handleChange(e)}}></input><br /> */}
            {isEdit? (<button onClick={()=>{updateUser()}}>Update</button>) :(<button onClick={()=>{handleAdd(employee)}}>Register</button>)}
        </form>
        <h1>Employee Details</h1><br />
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
                {empDetails.map((usr,i) => (
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