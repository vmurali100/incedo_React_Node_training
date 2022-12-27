import { useState } from "react";
export const RegisterFunction = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const register = () => {
    console.log(user);
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
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  return (
    <div>
      <form>
        <label htmlFor="First Name">First Name : </label>
        <br />
        <input
          type="text"
          name="fname"
          onChange={(e) => handleChange(e)}
          value={user.fname}
        />
        <br />
        <label htmlFor="Last Name">Last Name : </label>
        <br />
        <input
          type="text"
          name="lname"
          onChange={(e) => handleChange(e)}
          value={user.lname}
        />
        <br />
        <label htmlFor="Email">Email Id : </label>
        <br />
        <input
          type="text"
          name="email"
          onChange={(e) => handleChange(e)}
          value={user.email}
        />
        <br />
        <label htmlFor="User Name">User Name : </label>
        <br />
        <input
          type="text"
          name="username"
          onChange={(e) => handleChange(e)}
          value={user.username}
        />
        <br />
        <label htmlFor="Password">Password : </label>
        <br />
        <input
          type="text"
          name="password"
          onChange={(e) => handleChange(e)}
          value={user.password}
        />
        <br />
        <label htmlFor="Confirm Password">Confirm Password: </label>
        <br />
        <input
          type="text"
          name="confirmpassword"
          onChange={(e) => handleChange(e)}
          value={user.confirmpassword}
        />
        <br />
        <button onClick={register} type="button">
          Register
        </button>
      </form>
    </div>
  );
};