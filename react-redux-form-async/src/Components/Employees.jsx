import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { addUserAction, deleteUserAction, getAllUsersAction, updateUserAction } from "../actions/empAction";

const Employees = () =>{

const empDetails = useSelector((state=>state.employees))
const dispatch = useDispatch();
console.log("Details:", empDetails);

useEffect(()=>{
 dispatch(getAllUsersAction())
},[])

const handleDelete = (id) => {
    dispatch(deleteUserAction(id))
    console.log(id)
}

const handleEdit = (id) => {
    dispatch(updateUserAction(id))
    console.log(id)
}

const handleAdd = () => {
    dispatch(addUserAction())
}

return(
    <div>
        <h1>Employee Details</h1><br />
        <button onClick={()=>{handleAdd()}}>Add Employee</button><br />
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
                <td><button onClick={()=>{handleEdit(usr.id)}}>Edit</button></td>
                <td><button onClick={()=>{handleDelete(usr.id)}}>Delete</button></td>
            </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}

export default Employees