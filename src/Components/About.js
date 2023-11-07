import React from "react";
import logo from "./photos/logo.jpg";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="education">
        <div>
          <img src={logo} alt="logo" />
          <h3>Education</h3>
          <p>
            <a
              href="https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169839&utm_content=127574231184&utm_term=flatiron%20school&uqaid=513747011512&Cj0KCQjwx5qoBhDyARIsAPbMagCkV3wpMq0ysAs7xTX25nB-rsaVLev-yh-EvfMVDSyPh_IOBucFVS8aAkX7EALw_wcB&gclid=Cj0KCQjwx5qoBhDyARIsAPbMagCkV3wpMq0ysAs7xTX25nB-rsaVLev-yh-EvfMVDSyPh_IOBucFVS8aAkX7EALw_wcB"
              target="_blank"
              rel="noreferrer"
            >
              Flatiron School
            </a>
            <br></br>Frontend Development, <br></br> Software Enginering
          </p>
          <span>Feb 2023 to Oct 2023</span>
        </div>
        <div>
          <img src={logo} alt="logo" />
          <h3>Education</h3>
          <p>
            <a
              href="https://codethedream.org/"
              target="_blank"
              rel="noreferrer"
            >
              Code The Dream
            </a>
            <br />
            Frontend Development
            <br></br>
            JavaScript, React
          </p>
          <span>March 11, 2022</span>
        </div>
      </div>
      <div className="about-me">
        <p>
          I'm Elyas, a passionate Front End Software Engineer with a background
          in computer science. I bring a unique blend of technical knowledge and
          creativity to the world of software development. Skilled in front-end
          development with HTML, CSS, and JavaScript, I specialize in creating
          dynamic web applications that engage and delight users. My proficiency
          extends to working with popular frameworks like React, enabling me to
          craft interactive and intuitive user interfaces. But what sets me
          apart is my adaptability. I'm not just a software developer; I'm
          multilingual and a fast learner, always eager to embrace new
          challenges. I thrive in collaborative environments and actively seek
          opportunities to contribute my skills and my unwavering passion for
          software development.
        </p>
      </div>
    </section>
  );
}

export default About;
