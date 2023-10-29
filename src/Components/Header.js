import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="conatiner">
      <header className="header">
        <div className="logo">Elyas</div>
        <Navbar />
        <FontAwesomeIcon icon={faBars} className="icons" />
      </header>
    </div>
  );
}

export default Header;
