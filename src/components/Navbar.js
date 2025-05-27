import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-item" tabIndex="0">Home</NavLink>
            <NavLink to="/projects" className="nav-item" tabIndex="0">Projects</NavLink>
            <NavLink to="/activities" className="nav-item" tabIndex="0">Activities</NavLink>
            <NavLink to="/css480" className="nav-item" tabIndex="0">CSS480</NavLink>
            <NavLink to="/read" className="nav-item" tabIndex="0">Things to Read</NavLink>
            <NavLink className="nav-item" to="/taekwondo">Taekwondo</NavLink>

        </nav>
    );
}
