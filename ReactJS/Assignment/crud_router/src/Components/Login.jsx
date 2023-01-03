import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomAuth } from "./auth";

const Login = () => {
  const [username, setUserName] = useState("");
  const auth = useCustomAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    auth.login(username);
    navigate("/");
  };
  return (
    <div>
      <h1> Login Page</h1>
      <form>
        <label htmlFor="userName">Username : </label>
        <input
          type="text"
          name=""
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />{" "}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
