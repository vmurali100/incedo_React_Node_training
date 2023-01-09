import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsyncAction } from "../store/userSlice";
export const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const userDetails = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    setUsers(userDetails);
  }, [userDetails]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>conform Email</th>
            <th>password</th>
            <th>conform password</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.users.map((user, i) => (
            <tr key={i}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.conformemail}</td>
              <td>{user.password}</td>
              <td>{user.conformpassword}</td>
              <td>{user.username}</td>
              {/* <td>
                <button className="btn btn-warning">Edit User</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
