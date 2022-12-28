import React from "react";

const UserTable = ({ users, deleteUser, editUser }) => {
  console.log(users);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.confirmpassword}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      editUser(user, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
