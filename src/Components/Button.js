import React from "react";
import resume from "./photos/Elyas shamal.pdf";

function Button() {
  const openResumeInNewTab = () => {
    const resumePdfUrl = resume;
    window.open(resumePdfUrl, "_blank");
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="info-btns">
      <button className="btn" onClick={scrollToContact}>
        Contact
      </button>
      <button className="btn" onClick={openResumeInNewTab}>
        Download Cv
      </button>
    </div>
  );
}

export default Button;
