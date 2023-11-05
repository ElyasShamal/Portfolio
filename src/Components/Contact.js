import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Icons from "./Icons";

function Contact() {
  return (
    <footer id="contact">
      <h1>Contact</h1>
      <div className="footer-container">
        <div className="email">
          <p>
            <FaEnvelope />
            <a href="mailto:ShamalElyas2@gmail.com">shamalElyas2@gmail.com</a>
          </p>
        </div>

        <div className="socail-icons">
          <Icons />
        </div>
      </div>
    </footer>
  );
}

export default Contact;
