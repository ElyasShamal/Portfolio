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
          Driven by a lifelong fascination with technology, I've naturally
          progressed towards a career in Software Engineering. I have been
          driven toward technology since my youth and always wanted to make
          technology easier for end users. My multilingual background and
          fast-learning nature allow me to excel in collaborative environments.
          I look forward to leveraging my strong foundation in HTML, CSS, and
          JavaScript, along with expertise in React, to build engaging and
          user-friendly web applications with an ongoing pursuit of an
          Associate's Degree in Information Technology and a demonstrated
          ability to tackle new challenges. I am eager to contribute my skills
          and enthusiasm to your team.
        </p>
      </div>
    </section>
  );
}

export default About;
