import React from "react";
import Link from "./link"

const Navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    Navbar
                    <button 
                    className="nav-bar toggle"
                    type="button"
                    data bs toggle="collapse"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
          
                    data-bs-target="#navbarNav">

                    </button>
                    <span className="Navbar toggle">
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
        
                     <li className="nav-item">
                     <Link className="nav-link" to={"/create"}>
                      Create User
                      </Link>
                      </li>
          
                      </ul>
                       </div>
                    </span>


                </Link>
            </div>
        </nav>
    )

}
export default Navbar