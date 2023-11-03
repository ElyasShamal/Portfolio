import React from "react";
import checkmark from "./photos/checkmark.png";

function Skills() {
  const Skill = ["Html", "CSS", "JavaScript", "React", "sass"];

  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="Skill">
        <div className="flex">
          {Skill.map((skill, index) => {
            return (
              <div key={index}>
                {skill}
                <img src={checkmark} alt="icon" width="5%" />
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Skills;
