import React from 'react'

const UserTable = ({users,getAllUsers}) => {
  return (
    <div>
        <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        </thead>
        <tbody>
            {getAllUsers()}
            {users.map((user,i)=> <tr key={i}>
        <td>{user.fname}</td>
        <td>{user.lname}</td>
        <td>{user.email}</td>
            </tr>)}</tbody>

    </div>
  )
}

export default UserTable