import { Fragment } from "react";

function Table({users,handleDelete,handleEdit})
{
    console.log("Testings",!!users)
    return <Fragment>
        {!!users &&
       <table>
        <thead>
            <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th> 
          <th>Username</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user,i)=>
            {
                return <tr key={i}>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.username}</td>
                    <td><button onClick={()=>handleEdit(user,i)}>Edit</button></td>
                    <td><button onClick={()=>handleDelete(user)}>Delete</button></td>
                </tr>
            })}

        </tbody>
       </table>
}
    </Fragment>
}
export default Table;
