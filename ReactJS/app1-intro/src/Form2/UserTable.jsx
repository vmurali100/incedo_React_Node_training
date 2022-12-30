import React from "react";

const UserTable = ({users,deleteuser,editUser,toggleAddress,toggleCompany}) => {
  console.log(users)
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=> 
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>

            <td>{user.showAddress ?<div><div>{JSON.stringify(user.address)}</div>
            <button className="btn btn-primary" onClick={()=>{toggleAddress(user)}}>Close Address</button>
             </div>:<button className="btn btn-primary" onClick={()=>{toggleAddress(user)}}>Address</button>}
             </td>

            <td>{user.phone}</td>
            <td>{user.website}</td>

            <td>{user.showCompany ?<div><div>{JSON.stringify(user.company)}</div>
            <button className="btn btn-primary" onClick={()=>{toggleCompany(user)}}>
                Close Company</button> </div>:<button className="btn btn-primary" 
                onClick={()=>{toggleCompany(user)}}>Company</button>}</td>

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
