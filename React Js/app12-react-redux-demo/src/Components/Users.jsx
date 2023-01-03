import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserAction } from "../actions";

const Users = () => {
  const allUsers = useSelector((state) => state.users);
  console.log(allUsers);
  const dispatch = useDispatch();
  const handleAddUser = () => {
    dispatch(addUserAction("Murali"));
  };
  return (
    <div>
      <h2>Hello From Users Component !!</h2>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {allUsers.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;