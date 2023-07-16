import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Swipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/activity" activeClassName="active">
            Activity
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
