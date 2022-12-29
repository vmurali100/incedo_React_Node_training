import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const SampleTask = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.data.forEach((user) => {
        user.showAddress = false;
        user.showCompany = false;
        console.log(user);
      });
      setUsers(response.data);
    });
  }, []);

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
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID </th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.showAddress ? (
                  <>
                    <p>{JSON.stringify(user.address)}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        toggleAddress(user);
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
                        toggleAddress(user);
                      }}
                    >
                      Show Address
                    </button>
                  </>
                )}
              </td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                {user.showCompany ? (
                  <>
                    <p>{JSON.stringify(user.company)}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        toggleCompany(user);
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
                        toggleCompany(user);
                      }}
                    >
                      Show Company
                    </button>
                  </>
                )}
              </td>
              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleTask;
