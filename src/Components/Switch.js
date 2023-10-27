import React, { useState, useEffect } from "react";
import ReactSwitch from "react-switch";

function Switch() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
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
      uncheckedIcon
    />
  );
}
export default Switch;
