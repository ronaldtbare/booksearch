import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Google Books</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" to="/search" className="nav-item nav-link">Search <span className="sr-only">(current)</span></NavLink>
                    <NavLink activeClassName="active" to="/save" className="nav-item nav-link">Save <span className="sr-only">(current)</span></NavLink>
                </div>
            </div>
            
        </nav>
    );
}

export default Nav;