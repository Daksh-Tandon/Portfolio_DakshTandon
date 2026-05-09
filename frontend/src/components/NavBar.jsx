import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav">
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects">
            Project
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills" >
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" >
            Contact
          </NavLink>
        </li>
         <li>
          <NavLink to="/achievments" >
            Achievments
          </NavLink>
        </li>
         <li>
          <NavLink to="/mystory" >
            My_Story
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
