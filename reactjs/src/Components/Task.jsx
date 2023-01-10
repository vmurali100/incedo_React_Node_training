import React from 'react'
import { useState } from 'react'

const Task = ({users, ToggleAddress, ToggleCompany, address}) => {

    const[isShow, setIsShow] = useState(false)
    console.log(users)
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Phone</td>
                    <td>Website</td>
                    <td>Company</td>
                    <td>Edit</td>
                    <td>Delete</td>
                    <td>Show Address</td>
                </tr>
            </thead>
            <tbody>
            {users.map((user)=> <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{isShow?(<button className='btn btn-primary' onClick={(a)=>{ToggleAddress(user)}}>Hide Address</button>) :((<button className='btn btn-primary' onClick={(a)=>{ToggleAddress(user)}}>Show Address</button>))}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td><button className='btn btn-primary' onClick={()=>{ToggleCompany(user)}}>Show Company</button></td>
            <td><button className="btn btn-warning">Edit</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
            <td><p>{JSON.stringify(address)}</p></td>
             </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Task