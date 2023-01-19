import React from 'react'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'

import { addUser, addUserAsyncAction, deleteUser, getUserAsyncAction } from '../store/userSlice';

export const Users = () => {
    const userDetails = useSelector((state)=>state.users)
    const dispatch = useDispatch();
    const handleDelete=(i)=>{
       dispatch(deleteUser(i))
    }
    const handleAdd=()=>{
        dispatch(addUserAsyncAction(
            {
                "fname": "vikram",
                "lname": "mahadevan",
                "email": "vikramma@gmail.com",
                "id": 208
              }
        ))
    }
    useEffect(()=>{
          dispatch(getUserAsyncAction())
    },[])
  return (
    <div >
         <button type="button" onClick={handleAdd}>Add User</button>
         <br/>
        <table className='table'>
           
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>EDIT USER</th>
                    <th>DELETE USER</th>
                </tr>
            </thead>
            <tbody>
                {userDetails.users.map((val,i)=>(
                    <tr key = {i}>
                        <td>{val.id}</td>
                        <td>{val.fname}</td>
                        <td>{val.lname}</td>
                        <td>{val.email}</td>
                        <td>
                        <button className="btn btn-warning" onClick={()=>{}}>EDIT</button>
                        </td>
                        <td>
                        <button className="btn btn-danger" onClick={()=>{handleDelete(i)}}>DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default Users;
