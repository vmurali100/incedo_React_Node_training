import React from "react";
const Table = ({users,getAddress,address}) => {
  console.log(users)
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>Address</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=> <tr key={i}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td><button type="button" class="btn btn-primary" onClick={()=>{getAddress(user,i)}}>Show Address</button></td>
            
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td><button type="button" class="btn btn-primary">Show Company</button></td>
            <td>
              <button type="button" className="btn btn-warning" >Edit</button>
            </td>
            <td>
              <button type="button" className="btn btn-danger" >Delete</button>
            </td>
          </tr> )}
        </tbody>
      </table>
    </div>
  );
};
export default Table;