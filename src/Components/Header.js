import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="links" to="/About">
        <div className="logo">Elyas</div>
      </Link>
      <Navbar />
      <FontAwesomeIcon icon={faBars} className="icons" />
    </header>
  );
}

export default Header;
