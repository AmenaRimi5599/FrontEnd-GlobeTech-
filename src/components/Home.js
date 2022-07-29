import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <body className="background-color">
      <Container className="homecontainer">
        <Row>
          <Col xs={12} md={6}>
            <Link className="logolink" to="/">
              <img src="globetechlogo.png" alt="" />
            </Link>
          </Col>

          <Col xs={12} md={6} align="right">
            <div className="linkposition">
              <ul>
                <li>
                  <Link className="link1 activelink" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link1 " to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="link1" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col xs={12} md={6}>
            <div id="planelogo">
              <img src="planeline.png" alt="" id="line1" />
              <img src="planeline.png" alt="" id="line2" />
              <img src="planeline.png" alt="" id="line3" />{" "}
              <img src="plane.png" alt="" id="plane" width="80px" />
            </div>
            <div className="headbar">
              <h1>
                Welcome to<span className="globe"> Globetech</span>
              </h1>
              <label>
                We are committed to deliver
                <span className="itservice"> best IT services</span>. Our
                Consultants have experience in working with clients. We have
                extensive experience in the software application space and also
                offer a broad range and depth of technology.
              </label>
              <a href="/" className="support">
                Support Us
              </a>
              <a href="/" className="mission">
                Our Mission
              </a>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div id="solar"></div>
          </Col>
        </Row>
      </Container>
    </body>
  );
};

export default Home;
