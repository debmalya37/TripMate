import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Swipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" activeClassName="active-link">
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/activity" activeClassName="active-link">
            Activity
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
