const PracticeUserTable = ({ users, deleteUser,editUser }) => {
  console.log(users);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      editUser(user,i);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PracticeUserTable;
