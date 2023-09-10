import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="Footer-container">
      <hr />

      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/Rajesh7853814223">
            <img src={Github} style={{ width: "2rem" }} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rajesh-kumar-mohanta-2a4703250/">
            <img src={Linkedin} style={{ width: "2rem" }} alt="" />
          </a>

          <a href="https://www.instagram.com/rajesh.mohanta.982/">
            <img src={Instagram} style={{ width: "2rem" }} alt="" />
          </a>

          {/* <img src={Github}   alt="" /> */}
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}

export default Footer;
