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
    navigate("/features");
  };
  return (
    <div>
      <h1>Welcome to Login Component !!!</h1>
      <form>
        <label htmlFor="userName">User Name : </label>
        <input
          type="text"
          name=""
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />{" "}
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
