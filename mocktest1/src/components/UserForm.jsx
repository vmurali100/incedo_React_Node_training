import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const [index, setIndex] = useState(null);
  const getAllUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.data.forEach(
        (element) => (
          (element.showAddress = false), (element.showCompany = false)
        )
      );
      setUsers(res.data);
      console.log(res.data);
    });
  };
  const toggleAddress = (user) => {
    let allUsers = [...users];
    allUsers.forEach((usr) => {
      if (user.id === usr.id) {
        usr.showAddress = !usr.showAddress;
      }
    });
    setUsers(allUsers);
  };

  const toggleCompany = (user) => {
    let allUsers = [...users];
    allUsers.forEach((usr) => {
      if (user.id === usr.id) {
        usr.showCompany = !usr.showCompany;
      }
    });
    setUsers(allUsers);
  };
  const deleteUser = (user, i) => {
    console.log(user.id);
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + i)
      .then((res) => {
        getAllUsers();
      });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>
                  {usr.showAddress ? (
                    <>
                      <p>{JSON.stringify(usr.address)}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          toggleAddress(usr);
                        }}
                      >
                        Hide Address
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          toggleAddress(usr);
                        }}
                      >
                        Show Address
                      </button>
                    </>
                  )}
                </td>
                <td>{usr.phone}</td>
                <td>{usr.website}</td>
                <td>
                  {usr.showCompany ? (
                    <>
                      <p>{JSON.stringify(usr.company)}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          toggleCompany(usr);
                        }}
                      >
                        Hide Company
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          toggleCompany(usr);
                        }}
                      >
                        Show Company
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    // onClick={() => {
                    //   editUser(user, i);
                    // }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(usr, i);
                    }}
                  >
                    delete
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
export default UserForm;
