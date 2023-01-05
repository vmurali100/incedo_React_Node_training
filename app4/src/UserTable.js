import React from "react";

const UserTable = ({users,deleteuser,editUser}) => {
  console.log(users)
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=> <tr key={i}>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.email}</td>
            <td>
              <button className="btn btn-warning" onClick={()=>{editUser(user,i)}}>Edit</button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={()=>{deleteuser(user)}}>Delete</button>
            </td>
          </tr> )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;