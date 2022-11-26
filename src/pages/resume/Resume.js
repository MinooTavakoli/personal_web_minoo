import React from "react";
import { Card } from "../../components/card";
import suitcaseIcon from "../../assets/icons/suitcase-1.png";
import educationIcon from "../../assets/icons/education.png";
import loptopIcon from "../../assets/icons/laptop-1.png";
import flagIcon from "../../assets/icons/flag.png";
import codeIcon from "../../assets/icons/coding-1.png";
import skillIcon from "../../assets/icons/skills-1.png";
import CarouselSliderIndex from "../../components/carousel";
import "./Resume.css";

function Resume() {
  return (
    <Card>
      <div dir="ltr" className="card-inner animated active" id="about-card">
        <div className="card-wrap"></div>
        <div className="content services">
          <div className="content">
            <div className="title">
              <div className="first-word-wrapper">
                <div className="first-word">R</div> <div>esume </div>
              </div>
            </div>
          </div>
          <div className="row service-items border-line-v custom-row-grid">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-h-resume">
              <div className="service-item-resume">
                <div className="info-list-resume">
                  <ul>
                    <li>
                      <img
                        className="service-icon"
                        src={suitcaseIcon}
                        alt="deep Learning Icon"
                      />
                      <div
                        style={{
                          padding: " 0 16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        EXPERIENCE
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="desc-service-wrapper-resume">
                  <div
                    style={{
                      padding: "2px 8px",
                      margin: "16px 16px 4px 0px",
                      borderRadius: "6px",
                      border: "1px solid #0856c1",
                      color: "#0856c1",
                      height: "26px",
                      fontSize: "15px",
                    }}
                  >
                    <span>2022 April - Present</span>
                  </div>
                  <div className="desc-service-resume">
                    <p style={{ fontWeight: "bold" }}>
                      FrontEnd Developer at Asiatech Company
                    </p>
                    <p>Work on BSS project with a team of 8 members</p>
                  </div>
                </div>

                <div
                  className="desc-service-wrapper-resume"
                  style={{ position: "relative" }}
                >
                  <div
                    style={{
                      padding: "2px 8px",
                      margin: "16px 16px 4px 0px",
                      borderRadius: "6px",
                      border: "1px solid rgb(229 221 221)",
                      color: "rgb(151 151 151)",
                      height: "26px",
                      fontSize: "15px",
                    }}
                    className="btn-customer"
                  >
                    <span>June 2021 – April 2022</span>
                  </div>
                  <div className="desc-service-resume">
                    <p style={{ fontWeight: "bold" }}>
                      FrontEnd Developer at Lifeweb Company
                    </p>
                    <p>Work on data science project with a team of 7 members</p>
                  </div>
                </div>

                <div
                  className="desc-service-wrapper-resume"
                  style={{ position: "relative" }}
                >
                  <div
                    style={{
                      padding: "2px 8px",
                      margin: "16px 16px 4px 0px",
                      borderRadius: "6px",
                      border: "1px solid rgb(229 221 221)",
                      color: "rgb(151 151 151)",
                      height: "26px",
                      fontSize: "15px",
                    }}
                    className="btn-customer"
                  >
                    <span>March 2021 – June 2021</span>
                  </div>
                  <div className="desc-service-resume">
                    <p style={{ fontWeight: "bold" }}>
                      FrontEnd Developer at Lian Security Group
                    </p>
                    <p>
                      software-development company <br />
                    </p>
                  </div>
                </div>

                <div
                  className="desc-service-wrapper-resume"
                  style={{ position: "relative" }}
                >
                  <div
                    style={{
                      padding: "2px 8px",
                      margin: "16px 16px 4px 0px",
                      borderRadius: "6px",
                      border: "1px solid rgb(229 221 221)",
                      color: "rgb(151 151 151)",
                      height: "26px",
                      fontSize: "15px",
                    }}
                    className="btn-customer"
                  >
                    <span>september 2020 – March 2021</span>
                  </div>
                  <div className="desc-service-resume">
                    <p style={{ fontWeight: "bold" }}>
                      Junior FrontEnd Developer at KIT Company
                      <br />
                    </p>
                    <p>
                      Work on React MobX PWA Intractive application <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-h-resume">
              <div className="service-item-resume">
                <div className="info-list-resume">
                  <ul>
                    <li>
                      <img
                        className="service-icon"
                        src={educationIcon}
                        alt="deep Learning Icon"
                      />
                      <div
                        style={{
                          padding: " 0 16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        EDUCATION
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="desc-service-wrapper-resume">
                  <div
                    style={{
                      padding: "2px 8px",
                      margin: "16px 16px 4px 0px",
                      borderRadius: "6px",
                      border: "1px solid rgb(229 221 221)",
                      color: "rgb(151 151 151)",
                      height: "26px",
                      fontSize: "15px",
                    }}
                  >
                    <span>2016 - 2019</span>
                  </div>
                  <div className="desc-service-resume">
                    <p>
                      University of Applied Science and Technology <br />
                      Computer Engineering-Web Programming
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-wrap"></div>
        <div className="content services">
          <div className="content">
            <div className="title">
              <div className="first-word-wrapper skill-custom">
                <div>
                  <span className="first-word">My</span> Skills{" "}
                </div>
                <br />
                <div style={{ fontSize: "13px", color: "#a7a7a7" }}>
                  FrontEnd Developer: (React js)
                </div>
              </div>
            </div>
          </div>
          <div className="row service-items border-line-v custom-row-grid">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-h-resume">
              <div className="service-item-resume" style={{ margin: "0 24px" }}>
                <div className="info-list-resume">
                  <ul>
                    <li>
                      <img
                        className="service-icon"
                        src={loptopIcon}
                        alt="deep Learning Icon"
                      />
                      <div className="service-title">
                        Personal skills and Expertise
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="desc-service-wrapper-resume">
                  <div className="skills-list">
                    <ul>
                      <li className="border-line-h">
                        <div className="name">HTML </div>
                        <div className="progress">
                          <div
                            className="percentage"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </li>
                      <li className="border-line-h">
                        <div className="name">CSS/SASS </div>
                        <div className="progress">
                          <div
                            className="percentage"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </li>
                      <li className="border-line-h">
                        <div className="name">TailwindCSS/Material Ui </div>
                        <div className="progress">
                          <div
                            className="percentage"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="name">JavaScript/ES6+</div>
                        <div className="progress">
                          <div
                            className="percentage"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="name">Reactjs/React Hook</div>
                        <div className="progress">
                          <div
                            className="percentage"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="name">Redux/Redux Saga/MobX </div>
                        <div className="progress">
                          <div
                            className="percentage"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="name">Git/Scrum </div>
                        <div className="progress">
                          <div
                            className="percentage"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-d-6 col-t-6 col-m-12 border-line-h-resume">
              <div className="service-item-resume customs">
                <div className="info-list-resume">
                  <ul>
                    <li>
                      <img
                        className="service-icon"
                        src={flagIcon}
                        alt="deep Learning Icon"
                      />
                      <div
                        style={{
                          padding: " 0 16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        LANGUAGE
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="desc-service-wrapper-resume">
                  <div className="skills-list dotted">
                    <ul>
                      <li className="border-line-h">
                        <div className="name">English</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: "80%" }}>
                            <span className="da da-custom-pr">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </span>
                          </div>
                          <span className="dg">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </div>
                      </li>
                      <li className="border-line-h">
                        <div className="name">Persian</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: "90%" }}>
                            <span className="da da-custom-pr">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </span>
                          </div>
                          <span className="dg">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row service-items border-line-v custom-row-grid-code">
            <div className="">
              <div className="service-item-resume">
                <div className="info-list-resume">
                  <ul>
                    <li>
                      <img
                        className="service-icon"
                        src={codeIcon}
                        alt="deep Learning Icon"
                      />
                      <div
                        style={{
                          padding: " 0 16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        CODING
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="desc-service-wrapper-resume">
                  <div className="">
                    <div className="skills-list circles width-circle">
                      <ul>
                        <li>
                          <div className="name">React js</div>
                          <div className="progress p60">
                            <span>80%</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="name">Node js</div>
                          <div className="progress p70">
                            <span>40%</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="service-item-resume" style={{}}>
                <div className="info-list-resume">
                  <ul>
                    <li>
                      <img
                        className="service-icon"
                        src={skillIcon}
                        alt="deep Learning Icon"
                      />
                      <div
                        style={{
                          padding: " 0 16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        Interest
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="desc-service-wrapper-resume">
                  <br />
                  <div>
                    <div style={{ fontWeight: "bold" }}>Music</div>
                    <div style={{ fontSize: "14px", color: "#a7a7a7" }}>
                      Music gives a soul to the universe, wings to the mind,
                      flight to the imagination, and life to everything
                    </div>
                  </div>
                  <br />
                  <div>
                    <div style={{ fontWeight: "bold" }}>Shopping</div>
                    <div style={{ fontSize: "14px", color: "#a7a7a7" }}>
                      For me, Shopping is the moonlight in the dark night of
                      life. :)
                    </div>
                  </div>
                  <br />
                  <div>
                    <div style={{ fontWeight: "bold" }}>Volleyball Sport</div>
                    <div style={{ fontSize: "14px", color: "#a7a7a7" }}>
                      For me, the sport of volleyball is the most powerful form
                      of magic :)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-wrap"></div>
        <div className="content services">
          <div className="content">
            <div className="title">
              <div className="first-word-wrapper">
                <div className="first-word">T</div> <div>estimonials</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CarouselSliderIndex />
        </div>
      </div>
    </Card>
  );
}

export default Resume;
