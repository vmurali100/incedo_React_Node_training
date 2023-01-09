import React from 'react'

export const UserTable = ({users, deleteUser, editUser}) => {
    console.log(users)
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Enter Passowrd</th>
                    <th>Confirm Password</th>
                    
                </tr>
            </thead>
            <tbody>
               { users.map((user,i)=>
                    <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.email}</td>
                        <td>{user.uname}</td>
                        <td>{user.enterpass}</td>
                        <td>{user.confirmpass}</td>
                        <td>
                            <button className="btn btn-warning" onClick={()=>{editUser(user,i)}} >Edit</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" type="button" onClick={()=>{deleteUser(user)}}>Delete</button>
                        </td>
                    </tr>
               
                )
            }
            </tbody>
            
        </table>
    </div>
  )
}
