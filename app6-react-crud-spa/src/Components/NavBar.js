import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/read">ReadUser</a>
                            <a className="nav-link" href="/delete/:id">DeletedUser</a>
                            <a className="nav-link" href="/update/:id">UpdateUser</a>
                            <a className="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    };
};

export default NavBar;