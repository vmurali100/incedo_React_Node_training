import React, { Component } from 'react';
import { useCustomAuth } from './authContext';
import {Link} from 'react-router-dom';

 const NavBar = ()=> {

    const {user,logout} = useCustomAuth();

    const handleLogout = ()=>{
        logout();
    };

        return <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                user ? <Link className="nav-link active" aria-current="page" to={"/login"} onClick={()=>handleLogout()}>Logout</Link>:<Link className="nav-link active" aria-current="page" to={"/login"}>Login</Link>
                            }
                            <Link className="nav-link" to={"/createuser"}>CreateUser</Link>
                            <Link className="nav-link" to={"/readuser"}>ReadUser</Link>
                            <Link className="nav-link" to={"/deleteuser/:id"}>DeletedUser</Link>
                            <Link className="nav-link" to={"/updateuser/:id"}>UpdateUser</Link>
                            <Link className="nav-link disabled">Disabled</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    };

export default NavBar;