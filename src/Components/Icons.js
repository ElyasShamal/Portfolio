import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Icons() {
  return (
    <div className="social">
      <a
        href="https://github.com/ElyasShamal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="SocialIcons" />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammad-elyas-s-b975b7275/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="SocialIcons" />
      </a>
    </div>
  );
}

export default Icons;
