import React from "react";
import uuid from "react-uuid";
import checkmark from "./photos/checkmark.png";
import Image1 from "./photos/Image1.jpg";
import Image2 from "./photos/json.jpg";
import Image3 from "./photos/vscode.jpg";
import Image4 from "./photos/Git.jpg";
import Image5 from "./photos/Github.jpg";
import Image6 from "./photos/postman.jpg";
import Image7 from "./photos/ubunto.jpg";
import Image8 from "./photos/Npm.jpg";

function Skills() {
  const Skill = ["Html", "CSS", "JavaScript", "React"];
  const allImage = [
    Image1,
    Image2,
    Image4,
    Image8,
    Image3,
    Image5,
    Image6,
    Image7,
  ];
  const imageNames = [
    "Api",
    "Json",
    "Git",
    "Npm",
    "VsCode",
    "Github",
    "Postman",
    "Ubuntu",
  ];

  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="Skill-section">
        <div className="grid-1">
          {Skill.map((skill) => {
            return (
              <div key={uuid()}>
                <img src={checkmark} alt="icon" width="25px" />
                <h4>{skill}</h4>
              </div>
            );
          })}
        </div>
        <div className="grid-2">
          {allImage.map((image, index) => {
            return (
              <div key={index}>
                <img
                  src={image}
                  alt="skill-images"
                  width="30px"
                  height="30px"
                />
                <h4>{imageNames[index]}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
