import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAsyncAction } from "../store/usersSlice";
import UserForm from "./UserForm";

const CreateUser = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    subject: "",
  });
  const navigate=useNavigate()
  const dispatch= useDispatch()
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = async() => {
   const resp =  await dispatch(addUserAsyncAction(user))
   navigate('/')
  };

  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
        <UserForm
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default CreateUser;