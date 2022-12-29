import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Features"}>
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Pricing"}>
                Pricing
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
