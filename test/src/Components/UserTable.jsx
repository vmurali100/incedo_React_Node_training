import React from "react";

const UserTable = ({users,deleteuser,editUser,showaddress,showcompany}) => {
  console.log(users)
  return (
    <div>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Show Address</th>
            <th>Show Company</th>
           
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=> <tr key={i}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>
              <button className="btn btn-success" onClick={()=>{showaddress(user,i)}}>Show Address</button>
            </td>
            <td>
              <button className="btn btn-success" onClick={()=>{showcompany(user,i)}}>Show Company</button>
            </td>
            
           
          </tr> )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;


