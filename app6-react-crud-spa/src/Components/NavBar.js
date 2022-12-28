import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return <>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            <a class="nav-link" href="/read">ReadUser</a>
                            <a class="nav-link" href="/delete">DeletedUser</a>
                            <a class="nav-link" href="/update">UpdateUser</a>
                            <a class="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    };
};

export default NavBar;