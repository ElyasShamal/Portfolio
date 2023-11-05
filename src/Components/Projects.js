import React from "react";
import myImage from "./photos/elyas.jpg";

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <div>
          <img src={myImage} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
