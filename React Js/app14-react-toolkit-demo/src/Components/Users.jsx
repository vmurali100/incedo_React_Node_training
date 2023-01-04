import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, deleteUser } from "../store/usersSlice";

const Users = () => {
  const usersDetails = useSelector((state) => state.users);
  console.log(usersDetails)
  const dispatch = useDispatch()
  console.log(usersDetails);
  const handleDelete=(i)=>{
    dispatch(deleteUser(i))
  }

  const addUser=()=>{
    dispatch(addUserAction({
        "id": 379,
        "email": "murali@magna.org",
        "username": "murali",
        "password": "1234"
      }))
  }
  return (
    <div className="container">
        <button onClick={addUser}>Add User</button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {usersDetails.users.map((user,i)=> <tr key={i}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                    <button className="btn btn-warning">Edit User</button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{handleDelete(i)}}>Delete User</button>
                </td>
            </tr> )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;