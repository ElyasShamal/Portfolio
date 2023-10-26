import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ReactSwitch from "react-switch";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
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
        <li
          style={{ marginTop: "6px", paddingLeft: "10px", listStyle: "none" }}
        >
          <ReactSwitch
            theme={theme}
            onChange={toggleTheme}
            checked={theme === "dark"}
            handleDiameter={15} // Set the handle size
            offColor="#6b8e23" // Set the color when switched off (red)
            onColor="#6b8e23" // Set the color when switched on (green)
            offHandleColor="#FFFFFF" // Set the handle color when switched off (white)
            onHandleColor="#FFFFFF"
            height={20} // Set the height of the switch
            width={55}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
