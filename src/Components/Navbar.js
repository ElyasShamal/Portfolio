import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="menu-lists">
        <li className="lists">
          <Link className="links" to="/About">
            About
          </Link>
        </li>
        <li className="lists">
          <Link className="links" to="/Skills">
            Skills
          </Link>
        </li>
        <li className="lists">
          <Link className="links" to="/Projects">
            Projects
          </Link>
        </li>
        <li className="lists">
          <Link className="links" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
