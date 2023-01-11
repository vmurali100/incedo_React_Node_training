import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
export const RegisterFunction = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const register = () => {
    console.log(user);
    let newUsers = [...users];
    newUsers.push(user);
    setUsers(newUsers);
    clearForm();
  };
  const clearForm = () => {
    setUser({
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
    });
  };
  const handleChange = (e) => {
    // let newUser = { ...user };
    // newUser[e.target.name] = e.target.value;
    // setUser(newUser);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const deleteUser = (u) => {
    console.log(users);
    var newUsers = users.filter((usr) => usr.fname !== u.fname);
    console.log(newUsers);
    setUsers(newUsers);
  };
  const editUser = (user, i) => {
    setEditIndex(i);
    setUser(user);
  };

  const updateUser = () => {
    let newUsers = [...users];
    newUsers[editIndex] = user;
    setUsers(newUsers);
    setEditIndex(null);
    clearForm();
  };
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <UserForm
            user={user}
            setUser={setUser}
            handleChange={handleChange}
            handleSubmit={register}
            clearForm={clearForm}
            updateUser={updateUser}
            editIndex={editIndex}
          />
        </div>
        <div className="col-8">
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
      {/* <form className="container">
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name :
          </label>
          <br />
          <input
            type="text"
            name="fname"
            onChange={(e) => handleChange(e)}
            value={user.fname}
          />
          <br />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name :
          </label>
          <br />
          <input
            type="text"
            name="lname"
            onChange={(e) => handleChange(e)}
            value={user.lname}
          />
          <br />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Id :
          </label>
          <br />
          <input
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
            value={user.email}
          />
          <br />
        </div>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            User Name :
          </label>
          <br />
          <input
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
            value={user.username}
          />
          <br />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password :
          </label>
          <br />
          <input
            type="text"
            name="password"
            onChange={(e) => handleChange(e)}
            value={user.password}
          />
          <br />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password :
          </label>
          <br />
          <input
            type="text"
            name="confirmpassword"
            onChange={(e) => handleChange(e)}
            value={user.confirmpassword}
          />
          <br />
        </div>
        <button onClick={register} type="button" className="btn btn-primary">
          Register
        </button>
      </form> */}
    </div>
  );
};