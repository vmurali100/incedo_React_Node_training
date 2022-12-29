import React from "react";

const Task = ({users,deleteuser,editUser}) => {
  console.log(users)
  return (
    <div>
      <table className="table">
       <thead>
            <td>id</td>
            <td>name</td>
            <td>username</td>
            <td>email</td>
            <td>address</td>
            <td>phone</td>
            <td>website</td>
            <td>company</td>
            </thead>
            <tbody>
        <tbody>
          {users.map((user,i)=> <tr key={i}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            {/* <td>{user.address}</td> */}
            <td>{user.phone}</td>
            <td>{user.website}</td>
            {/* <td>{user.company}</td> */}
            <td>
              <button className="btn btn-warning" onClick={()=>{editUser(user,i)}}>Edit</button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={()=>{deleteuser(user)}}>Delete</button>
            </td>
          </tr> )}
        </tbody>
            </tbody>
            </table>


            
    </div>
  );
};

export default Task;