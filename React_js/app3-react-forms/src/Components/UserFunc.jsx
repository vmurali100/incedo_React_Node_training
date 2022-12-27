import React from "react";

import { useState } from "react";
const Userfunc = () => {
  // WE can declare a Variable , and a function to manipulate that variable ;

  //   const [age, setAge] = useState(40);
  const [user, setUser] = useState({ fname: "", lname: "", email: "",username:"",password:"",password1:"" });
  const handleSubmit = () => {
    console.log(user);
    clearForm()
  };

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const clearForm=()=>{
    setUser({ fname: "", lname: "", email: "",username:"",password:"",password1:"" })

  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.fname}
            name="fname"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.lname}
            name="lname"
            onChange={(e) => {
              handleChange(e);
            }}

          />

        </div>

        <div className="mb-3">

          <label htmlFor="exampleInputEmail1" className="form-label">

            Email address

          </label>

          <input

            type="email"

            className="form-control"

            value={user.email}

            name="email"

            onChange={(e) => {

              handleChange(e);

            }}

          />

        </div>



        <div className="mb-3">

          <label htmlFor="username" className="form-label">

            User Name

          </label>

          <input

            type="text"

            className="form-control"

            value={user.username}

            name="username"

            onChange={(e) => {

              handleChange(e);

            }}

          />

        </div>



        <div className="mb-3">

          <label htmlFor="password" className="form-label">

            Enter Password

          </label>

          <input

            type="text"

            className="form-control"

            value={user.password}

            name="password"

            onChange={(e) => {

              handleChange(e);

            }}

          />

        </div>



        <div className="mb-3">

          <label htmlFor="password1" className="form-label">

            Confirm Password

          </label>

          <input

            type="text"

            className="form-control"

            value={user.password1}

            name="password1"

            onChange={(e) => {

              handleChange(e);

            }}

          />

        </div>



        <button

          type="button"

          className="btn btn-primary"

          onClick={handleSubmit}

        >

          Register

        </button>

      </form>

    </div>

  );

};



export default Userfunc;