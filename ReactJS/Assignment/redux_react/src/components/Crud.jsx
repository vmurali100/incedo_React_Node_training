import React from "react";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
function Crud() {
  const [user, setUser] = useState({"cpass":"","email":"","pass":"","username":""});
  const [disableUpdate, setDisableUpdate] = useState(true);
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  console.log(employees);
  const handleEdit = (data) => {
    setUser(data);
    setDisableUpdate(false);
  };
  const handleClick = () => {
    console.log("Testings user print", user);
    dispatch({ type: "ADD_USER", payload: user });
    clearForm();
  };
  const clearForm = () => {
    setUser({ cpass: "", email: "", pass: "", username: "" });
  };
  const onChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleDelete = (i) => {
    dispatch({ type: "DELETE_USER", payload: i });
    clearForm();
  };
  const handleUpdate = () => {
    dispatch({ type: "UPDATE_USER", payload: user });
    setDisableUpdate(true);
    clearForm();
  };
  return (
    <>
      {" "}
      <form>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={(e) => onChange(e)}
        />{" "}
        <br />
        <br />
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => onChange(e)}
        />{" "}
        <br />
        <br />
        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          name="pass"
          id="pass"
          value={user.pass}
          onChange={(e) => onChange(e)}
        />{" "}
        <br />
        <br />
        <label htmlFor="cpass">Confirm Password :</label>
        <input
          type="password"
          name="cpass"
          id="cpass"
          value={user.cpass}
          onChange={(e) => onChange(e)}
        />{" "}
        <br />
        <br />
        <button type="button" onClick={handleClick} disabled={!disableUpdate}>
          Create
        </button>
        <button type="button" onClick={handleUpdate} disabled={disableUpdate}>
          Update
        </button>
      </form>
      <p>{JSON.stringify(user)}</p>
      <ol>
        {!!employees &&
          employees.map((emp, i) => {
            return (
              
                <li key={i} >
                 <div key={i}  onClick={() => handleEdit(emp)}> {JSON.stringify(emp)}</div>
                  <button onClick={(e) => handleDelete(emp.username)}>
                  delete
                </button>
                </li>
                
             
            );
          })}
      </ol>
    </>
  );
}
export default Crud;
