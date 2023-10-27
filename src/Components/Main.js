import React from "react";
import About from "./About";
import elyas from "./photos/elyas.jpg";
import Button from "./Button";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="image-container">
          <img src={elyas} alt="Elyas" className="image" />
        </div>
        <div className="information">
          <p className="p-1">Hello, I'm</p>
          <h1 className="title">Elyas Shamal</h1>
          <p className="p-2">Frontend Developer</p>
          <Button />
        </div>
      </div>

      <About />
    </main>
  );
}

export default Main;
