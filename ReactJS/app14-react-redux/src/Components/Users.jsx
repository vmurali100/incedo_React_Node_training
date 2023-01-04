import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserAsyncAction,
  deleteUser,
  getUsersAsyncAction,
} from "../store/usersSlice";

const Users = () => {
  const usersDetails = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (i) => {
    dispatch(deleteUser(i));
  };

  useEffect(() => {
    dispatch(getUsersAsyncAction());
  }, []);
  const addUser = () => {
    dispatch(
      addUserAsyncAction({
        id: null,
        email: "bhargav2000@gmail.com",
        username: "bhavirisetty",
        firstname: "bhargav",
        password: "1234",
      })
    );
  };
  return (
    <div className="container">
      <button onClick={addUser} className="btn btn-primary">
        Add User
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersDetails.users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.firstname}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button className="btn btn-warning">Edit User</button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(i);
                  }}
                >
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
