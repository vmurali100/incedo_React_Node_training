import React from "react";
import { Link } from "react-router-dom";
import { useCustomAuth } from "./auth";

const NavBar = () => {
    const {user,logout} = useCustomAuth();
    console.log(user)
    const handleLogout = ()=>{
        logout()
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/features"}>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                {user?<Link className="nav-link" to={"/login"} onClick={handleLogout}>
                  Logout
                </Link>:<Link className="nav-link" to={"/login"} >
                  Login
                </Link>}
                
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
