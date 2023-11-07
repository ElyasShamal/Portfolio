import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Switch from "./Switch";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleScreenWidthChange() {
    if (window.innerWidth > 614) {
      setShowMenu(false);
    } else if (window.innerWidth < 300) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidthChange);

    return () => {
      window.removeEventListener("resize", handleScreenWidthChange);
    };
  }, []);
  return (
    <div className="conatiner">
      <header className="header">
        <div className="logo">Elyas</div>
        <Navbar />
        <div className="icons">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {showMenu && (
          <div className="open">
            <ul className="open-menu">
              <li className="link-switch">
                <Switch />
              </li>
              <li className="links" onClick={() => setShowMenu(!showMenu)}>
                <a href="#about">About</a>
              </li>
              <li className="links" onClick={() => setShowMenu(!showMenu)}>
                <a href="#skills">Skills</a>
              </li>
              <li className="links" onClick={() => setShowMenu(!showMenu)}>
                <a href="#projects">Projects</a>
              </li>
              <li className="links" onClick={() => setShowMenu(!showMenu)}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
