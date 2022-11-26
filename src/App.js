import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Col, Row } from "./components/grid";
import Header from "./layout/headers/Header";
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
        </Row>
      </Layout>
    </Router>
  );
}

export default App;
