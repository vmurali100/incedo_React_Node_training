import { useState } from "react";
import { Fragment } from "react";
const startState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  username: "",
  pass: "",
  bio: "",
};
function FunctionalForms({user,handleChange,handleClick,editIndex,updateUser}) {
 console.log("indexx",editIndex)
 console.log(startState)
  return (
    <Fragment>
      <h1>Functional Components</h1>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input
          type="text"
          name="fname"
          id="fname"
          value={user.fname}
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <br />
        <label htmlFor="lname">Last Name : </label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={user.lname}
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <br />
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <br />
        <label htmlFor="phone">Phone :</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={user.phone}
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <br />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <br />
        <label htmlFor="pass">Password :</label>
        <input
          type="password"
          name="pass"
          id="pass"
          value={user.pass}
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <br />
        <label htmlFor="bio">Short Bio:</label>
        <input
          type="text"
          name="bio"
          id="bio"
          value={user.bio}
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <br />
       {editIndex!=null?<button type={"button"} onClick={updateUser}>
          Update
        </button>:<button type={"button"} onClick={handleClick}>
          Register
        </button>
}
      </form>
    </Fragment>
  );
}
export default FunctionalForms;
