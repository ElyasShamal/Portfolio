import React from "react";
import resume from "./photos/resume.pdf";

function Button() {
  const openResumeInNewTab = () => {
    const resumePdfUrl = resume;
    window.open(resumePdfUrl, "_blank");
  };
  return (
    <div className="info-btns">
      <button className="btn">Contact</button>
      <button className="btn" onClick={openResumeInNewTab}>
        Download Cv
      </button>
    </div>
  );
}

export default Button;
