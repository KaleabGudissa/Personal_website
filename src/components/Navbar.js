import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/css480">CSS 480</NavLink>
        </nav>
    );
}
