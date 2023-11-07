import React from "react";
import Data from "./data";

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects">
        {Data.map((datas, index) => {
          return (
            <div key={index}>
              <img
                src={datas.imageUrl}
                width="100%"
                height="200px"
                alt="projects"
              ></img>
              <h3 className="project-title">{datas.name}</h3>
              <button className="project-btn">
                <a href={datas.githubUrl} target="_blink">
                  Github
                </a>
              </button>
              <button className="project-btn">
                <a href={datas.link} target="_blink">
                  Live
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
