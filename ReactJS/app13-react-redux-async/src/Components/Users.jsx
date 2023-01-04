import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserAction, getAllUsersAction } from '../actions/usersActions';

const Users = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllUsersAction())
    },[])
    const usersDetails = useSelector((state)=> state.users);
    console.log(usersDetails)
  return (
    <div>
      <h2>Welcome to Users Component !!</h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {usersDetails.map((user,i)=> <tr key={i}>
        <td>{user.id}</td>
        <td>{user.fname}</td>
        <td>{user.lname}</td>
        <td>{user.email}</td>
        <td>
            <button className='btn btn-warning'>Edit User</button>
        </td>
        <td>
            <button className='btn btn-danger' onClick={()=>{dispatch(deleteUserAction(user.id))}}>Delete User</button>
        </td>
    </tr> )}
  </tbody>
</table>
    </div>
  )
}

export default Users
