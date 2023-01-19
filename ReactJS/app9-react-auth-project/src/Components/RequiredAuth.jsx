import React from "react";
import { useNavigate } from "react-router-dom";
import { useCustomAuth } from "./auth";

const RequiredAuth = ({ children }) => {
  const { user } = useCustomAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  if (!user) {
    return (
      <>
        <p style={{ color: "red" }}>Please Login to View the Features !!!</p>
        <button onClick={handleLogin} className="btn btn-primary mt-1 ">
          Go To Login
        </button>
      </>
    );
  }

  return children;
};

export default RequiredAuth;
