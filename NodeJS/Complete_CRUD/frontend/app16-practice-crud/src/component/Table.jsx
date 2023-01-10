import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUsersAsync } from '../store/dataSlice';

const Table = () => {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUsersAsync());
    },[dispatch])
    var users = useSelector((state)=>state.users);
    console.log(users);

  return (
    <div>
      {/* <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last name</th>
                <th>Username</th>
                <th>Email</th>
                <th>edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,i)=>
            <tr key={i}>
                <td>{i+1}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            )}
        </tbody>
      </table> */}
    </div>
  )
}

export default Table;