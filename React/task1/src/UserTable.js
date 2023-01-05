import React from "react";

const UserTable = ({users,deleteuser,editUser,showaddress,showcompany}) => {
  console.log(users)
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=> <tr key={i}>
            <td>{user.id}</td>
            <td>{user.fname}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.company}</td>
            <td>
              <button className="btn btn-warning" onClick={()=>{showaddress(user,i)}}>Show Address</button>
            </td>
            <td>
              <button className="btn btn-warning" onClick={()=>{showcompany(user,i)}}>Show Company</button>
            </td>
            
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