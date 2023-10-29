import React from "react";
import "../App.css";
import Switch from "./Switch";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="menu-lists">
        <li className="lists">
          <a className="links" href="#about">
            About
          </a>
        </li>
        <li className="lists">
          <a className="links" href="#skills">
            Skills
          </a>
        </li>
        <li className="lists">
          <a className="links" href="#projects">
            Projects
          </a>
        </li>
        <li className="lists">
          <a className="links" href="#contact">
            Contact
          </a>
        </li>
        <li className="switch-list">
          <Switch />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
