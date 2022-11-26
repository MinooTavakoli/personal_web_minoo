import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card } from "../../components/card";
import aboutIconActive from "../../assets/icons/man-1.png";
import aboutIcon from "../../assets/icons/man.png";
import resumeIcon from "../../assets/icons/cv-1.png";
import resumeIconActive from "../../assets/icons/cv.png";
import contactIcon from "../../assets/icons/contact.png";
import contactIconActive from "../../assets/icons/contact-1.png";
import logo from "../../assets/images/logoM.png";
import "./Header.css";

function Header() {
  let location = useLocation();
  let path = location.pathname;

  return (
    <Card className="custom-responsive-head">
      <div dir="ltr" className="minoo-tavakoli-name">
        <img style={{ width: "44px" }} src={logo} alt="logo-minoo-tavakoli" />
        <div style={{ flexDirection: "column", padding: "0 4px" }}>
          <div>Minoo Tavakoli</div>
          <div style={{ color: "#0856c1", fontWeight: "bold" }}>
            Front End Developer
          </div>
        </div>
      </div>
      <div className="sidebar-header-wrapper">
        <ul className="custom-ul-head-responsive">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li className="li-custom-head">
              <a href="#about-card" className="link-custom">
                {path === "/about" ? (
                  <img
                    src={aboutIconActive}
                    alt="about-me-minoo-tavakoli"
                    className="person-icon"
                  />
                ) : (
                  <img
                    src={aboutIcon}
                    alt="about-me-minoo-tavakoli"
                    className="person-icon"
                  />
                )}

                <div
                  className="link"
                  style={{
                    color: path === "/about" ? "#0D62D7" : "#323232",
                    fontWeight: path === "/about" ? "bold" : "400",
                  }}
                >
                  ABOUT
                </div>
              </a>
            </li>
          </Link>

          <Link to="/resume" style={{ textDecoration: "none" }}>
            <li className="li-custom-head">
              <a href="#resume-card" className="link-custom">
                {path === "/resume" ? (
                  <img
                    src={resumeIconActive}
                    alt="resume-minoo-tavakoli"
                    className="person-icon"
                  />
                ) : (
                  <img
                    src={resumeIcon}
                    alt="resume-minoo-tavakoli"
                    className="person-icon"
                  />
                )}
                <div
                  className="link"
                  style={{
                    color: path === "/resume" ? "#0D62D7" : "#323232",
                    fontWeight: path === "/resume" ? "bold" : "400",
                  }}
                >
                  RESUME
                </div>
              </a>
            </li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className="li-custom-head">
              <a href="#contact-card" className="link-custom">
                {path === "/contact" ? (
                  <img
                    src={contactIconActive}
                    alt="contact-minoo-tavakoli"
                    className="person-icon"
                  />
                ) : (
                  <img
                    src={contactIcon}
                    alt="contact-minoo-tavakoli"
                    className="person-icon"
                  />
                )}
                <div
                  className="link"
                  style={{
                    color: path === "/contact" ? "#0D62D7" : "#323232",
                    fontWeight: path === "/contact" ? "bold" : "400",
                  }}
                >
                  CONTACT
                </div>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </Card>
  );
}

export default Header;
