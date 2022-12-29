import { useState } from "react";
export const Functional = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    phone: "",
    pass: "",
    bio: "",
  });
  const handleChange = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value });
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleClick = () => {
    console.log("User :", user);
    setUser({
      fname: "",
      lname: "",
      username: "",
      email: "",
      phone: "",
      pass: "",
      bio: "",
    });
  };
  return (
    <div>
      <form>
        <h1>Register</h1>
        <div className="row">
          <label htmlFor="fname" className="form-label">
            {" "}
            Name{" "}
          </label>
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              name="fname"
              id="fname"
              value={user.fname}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="fname" className="form-label">
              First{" "}
            </label>
          </div>
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              name="lname"
              id="lname"
              value={user.lname}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="lname">Last </label>
          </div>
        </div>
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          value={user.username}
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <label htmlFor="email" className="form-label">
          Email :
        </label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          className="form-control"
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <label htmlFor="phone" className="form-label">
          Phone :
        </label>
        <br />
        <input
          type="tel"
          name="phone"
          id="phone"
          pattern="[+]{1}[0-9]{11,14}"
          value={user.phone}
          className="form-control"
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <label htmlFor="pass" className="form-label">
          Password :
        </label>
        <br />
        <input
          type="password"
          name="pass"
          id="pass"
          value={user.pass}
          className="form-control"
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <label htmlFor="bio" className="form-label">
          Shot Bio:
        </label>
        <br />
        <input
          type="text"
          name="bio"
          id="bio"
          value={user.bio}
          className="form-control"
          onChange={(e) => handleChange(e)}
        />
        <label className="form-label">
          {" "}
          Share a little information about yourself{" "}
        </label>
        <br />
        <br />
        <button type={"button"} onClick={handleClick}>
          Submit
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};
