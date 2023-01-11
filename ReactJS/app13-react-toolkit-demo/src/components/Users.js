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
        id: 3,
        username: "deepu",
        password: "123",
        confirmpassword: "123",
        email: "deepu@gmail.com",
        fname: "m",
        lname: "deepu",
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
            <th>Email</th>
            <th>User Name</th>
            <th>Password</th>
            <th>confirm password</th>
            <th>fname</th>
            <th>lname</th>
          </tr>
        </thead>
        <tbody>
          {usersDetails.users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.confirmpassword}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
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