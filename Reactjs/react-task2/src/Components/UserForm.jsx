import React from 'react'
import usersSlice from '../store/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersAsyncAction, deleteUserAsyncAction } from '../store/usersSlice'
import {useEffect} from 'react'

const UserForm = () => {
const userDetails = useSelector((state) => state.users);
const dispatch = useDispatch()
useEffect(()=>{dispatch(getUsersAsyncAction())}, [])
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>email</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>
            {userDetails.users.map((user, index) => (
                <tr key = {index}>
                    <td>{user.id}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>
                      <button type ="text" onClick={()=> {
                        return dispatch(deleteUserAsyncAction(user.id))
                      }}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserForm
