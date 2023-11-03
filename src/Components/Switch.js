import React, { useState, useEffect } from "react";
import ReactSwitch from "react-switch";

function Switch() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    // setTheme(alert("Hi, its not done yet"));
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ReactSwitch
      theme={theme}
      onChange={toggleTheme}
      checked={theme === "dark"}
      handleDiameter={15}
      offColor="#000"
      onColor="#FFF"
      offHandleColor="#FFF"
      onHandleColor="#000"
      height={20}
      width={55}
      uncheckedIcon
    />
  );
}
export default Switch;
