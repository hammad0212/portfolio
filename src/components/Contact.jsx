import React from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        
        <a href="https://www.linkedin.com/in/hammad-sunsara" target="_blank" className="items">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://github.com/hammad0212" target="_blank" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:hammadsunsara2620@gmail.com" target="_blank" className="items">
          <SiGmail className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
