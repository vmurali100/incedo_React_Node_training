import React from "react";

const UserTable = ({users,showAddress,showCompany,address,company}) => {
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
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=> <tr key={i}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button class="" onClick={()=>{showAddress(user,i)}}>showAddress</button>
            </td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>
              <button  onClick={()=>{showCompany(user,i)}}>showCompany</button>
            </td>
          </tr> )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;