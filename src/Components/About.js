import React from "react";
import logo from "./photos/logo.jpg";

function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="education">
        <img src={logo} alt="logo" />
        <h1>Name</h1>
        <div>
          <img src={logo} alt="logo" />
          <h1>Name</h1>
        </div>
      </div>
    </section>
  );
}

export default About;
