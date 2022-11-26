import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Col, Row } from "./components/grid";
import Header from "./layout/headers/Header";
import Profile from "./layout/profile/Profile";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Row dir="ltr" className="head-responsive">
          <Col md="2" className="custom-container-head-wrapper">
            <div className="custom-container-head">
              <Header />
            </div>
          </Col>
          <Col>
            <div className="custom-container-profile">
              <Profile />
            </div>
          </Col>
          <Col className="custom-container-responsive">
            <div className="custom-container-page">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Layout>
    </Router>
  );
}

export default App;
