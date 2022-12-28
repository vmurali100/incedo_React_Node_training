import { useState } from "react";
export const FormFunctional = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    pass: "",
    bio: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    console.log("User :", user);
    setUser({
      fname: "",
      lname: "",
      email: "",
      username: "",
      pass: "",
      bio: "",
    });
  };
  return (
    <div>
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
        <label htmlFor="bio">Shot Bio:</label>
        <input
          type="text"
          name="bio"
          id="bio"
          value={user.bio}
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <br />
        <button type={"button"} onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};
