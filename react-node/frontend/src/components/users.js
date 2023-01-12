import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteUserAsyncAction,
  getAllUsersAsyncAction,
  updateUserAsyncAction,
} from "../store/userSlice";

export const Users = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllUsersAsyncAction());
  }, []);
  const editUser = (usr) => {
    navigate("/edit", { state: usr });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">fname</th>
            <th scope="col">lname</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((u) => (
            <tr>
              <td>{u.fname}</td>
              <td>{u.lname}</td>
              <td>{u.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteUserAsyncAction(u));
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    editUser(u);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
