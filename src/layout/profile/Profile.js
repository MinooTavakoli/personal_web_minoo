import React from "react";
import { Card } from "../../components/card";
import profileImage from "../../assets/images/profileImage.jpg";
import linkedinIcon from "../../assets/icons/linkedin-1.png";
import githubIcon from "../../assets/icons/github-3.png";
import telegramIcon from "../../assets/icons/telegram.png";
import { Col, Row } from "../../components/grid";
import "./Profile.css";

function Profile() {
  return (
    <React.Fragment>
      <div className="card-started"> </div>
      <Card style={{ overflow: "hidden" }} className="card-custom-pr">
        <Row>
          <Col>
            <div className="profile-component">
              <div className="profile-slide">
                <div className="profile-container-wrapper">
                  <div className="profile-image-wrapper">
                    <img
                      src={profileImage}
                      alt="profile-minoo-tavakoli"
                      className="profile-image"
                    />
                  </div>
                </div>
              </div>
              <div className="profile-info-wrapper">
                <div className="profile-info-details">
                  <div className="title-name">Minoo Tavakoli</div>
                  <div className="title-job">Front End Developer</div>
                  <div dir="ltr" className="profile-info-description">
                    React Developer <br />
                  </div>
                  <div className="social-icon-wrapper">
                    <a
                      href="https://www.linkedin.com/in/minoo-tavakoli-a2a6b71aa"
                      target="_blank"
                    >
                      <div className="social-icon-linkedin-wrapper">
                        <img
                          src={linkedinIcon}
                          alt="socail-icon-linkedin"
                          className="social-icon-linkedin"
                        />
                      </div>
                    </a>
                    <a href="https://github.com/minootavakoli" target="_blank">
                      <div className="social-icon-github-wrapper">
                        <img
                          src={githubIcon}
                          alt="social-icon-github"
                          className="social-icon-github"
                        />
                      </div>
                    </a>
                    <a href="https://t.me/Minoo_Tavakoli" target="_blank">
                      <div className="social-icon-telegram-wrapper">
                        <img
                          src={telegramIcon}
                          alt="social-icon-telegram"
                          className="social-icon-telegram"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
}

export default Profile;
