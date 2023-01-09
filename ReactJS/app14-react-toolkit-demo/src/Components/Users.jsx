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
        email: "murali@magna.org",
        username: "murali",
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
            <th>Email</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 7958420f8ff5d27eb5071f5a10b7c2f92c70aa9f
=======
>>>>>>> e7e10d628cae7290683bb487fd664591b397d070
          {usersDetails.users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1b49dce71a83faad60a4549fa49317479697c594
=======
>>>>>>> 7958420f8ff5d27eb5071f5a10b7c2f92c70aa9f
=======
>>>>>>> e7e10d628cae7290683bb487fd664591b397d070
        </tbody>
      </table>
    </div>
  );
};

export default Users;
