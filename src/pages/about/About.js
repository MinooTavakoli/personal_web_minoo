import React from "react";
import deepLearningIcon from "../../assets/icons/deep-learning-2.png";
import linuxIcon from "../../assets/icons/linux.png";
import systemIcon from "../../assets/icons/system.png";
import vmwareIcon from "../../assets/icons/vmware.png";
import { Card } from "../../components/card";
import "./About.css";

function About() {
  return (
    <Card>
      <div dir="ltr" className="card-inner animated active" id="about-card">
        <div className="card-wrap">
          <div className="content">
            <div className="title">
              <div className="first-word-wrapper">
                <div className="first-word">About</div> <div> Me </div>
              </div>
            </div>
          </div>

          <div className="row about-title-responsive">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v ltr-section">
              <div className="text-box">
                <p>
                  I am Minoo Tavakoli, Front End Developer. <br />I have been
                  programming for 2 years.
                  <br />I am very interested in web application design.
                </p>
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v rtl-section">
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Age</strong> 26
                  </li>
                  <li>
                    <strong>Nationality</strong> Iranian
                  </li>
                  <li>
                    <strong>Freelance</strong> Available
                  </li>
                  <li>
                    <strong>Address</strong> Iran, Tehran
                  </li>
                </ul>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        <div className="content services">
          <div className="content">
            <div className="title">
              <div className="first-word-wrapper">
                <div className="first-word">My</div> <div> Services </div>
              </div>
            </div>
          </div>

          <div className="row service-items border-line-v custom-row-grid">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-h justify-center">
              <div className="service-item">
                <div className="icon">
                  <img
                    className="service-icon"
                    src={systemIcon}
                    alt="deep Learning Icon"
                  />
                </div>
                <div className="name">
                  <span>Padimo Shop </span>
                </div>
                <div className="desc-service-wrapper">
                  <div className="desc-service">
                    <p>
                      Padimo Shop is a shoe store that currently has its home
                      page and pages related to registration and shipping done.
                    </p>
                    <a style={{ fontSize: "13px" }} href="https://padimoshop.ir">
                      https://padimoshop.ir (in progress...)
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-h justify-center">
              <div className="service-item">
                <div className="icon">
                  <img
                    className="service-icon"
                    src={deepLearningIcon}
                    alt="deep Learning Icon"
                  />
                </div>
                <div className="name">
                  <span>BrandMi</span>
                </div>
                <div className="desc-service-wrapper">
                  <div className="desc-service">
                    <p>
                      Brandami is an intelligent system for monitoring and
                      analyzing your business brand in cyberspace, which uses
                      artificial intelligence, data mining, text mining, and
                      statistical analysis to analyze online news and social
                      media content, and the image of your business brand in
                      cyberspace. It offers you virtual.
                    </p>
                    <a style={{ fontSize: "13px" }} href="https://brandmi.life">
                      https://brandmi.life
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-h justify-center">
              <div className="service-item">
                <div className="icon">
                  <img
                    className="service-icon"
                    src={linuxIcon}
                    alt="deep Learning Icon"
                  />
                </div>
                <div className="name">
                  <span>NPM Packages </span>
                </div>
                <div className="desc-service-wrapper">
                  <div className="desc-service">
                    <p>
                      Packages for public use have been published on the NPM
                      site
                    </p>
                    <a
                      style={{ fontSize: "13px" }}
                      href="https://www.npmjs.com/~minootavakoli"
                    >
                      https://www.npmjs.com/~minootavakoli
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-h justify-center">
              <div className="service-item">
                <div className="icon">
                  <img
                    className="service-icon"
                    src={vmwareIcon}
                    alt="deep Learning Icon"
                  />
                </div>
                <div className="name">
                  <span>GitHub</span>
                </div>
                <div className="desc-service-wrapper">
                  <div className="desc-service">
                    <p>Examples of the work done can be seen on GitHub.</p>
                    <a
                      style={{ fontSize: "13px" }}
                      href="https://www.npmjs.com/~minootavakoli"
                    >
                      https://www.npmjs.com/~minootavakoli
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </Card>
  );
}

export default About;
