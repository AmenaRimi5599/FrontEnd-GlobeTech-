import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [planePosition, setPlanePosition] = useState("left");
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
            <table>
              <tr>
                <td>
                  {planePosition === "left" && (
                    <div
                      id="planelogo"
                      onMouseEnter={() => {
                        setPlanePosition("right");
                      }}
                    >
                      <img src="wholeplane.png" alt="" id="plane" />
                    </div>
                  )}
                </td>
                <td>
                  {planePosition === "right" && (
                    <div
                      id="planelogo2"
                      onMouseEnter={() => {
                        setPlanePosition("left");
                      }}
                    >
                      <img src="wholeplane.png" alt="" id="plane" />
                    </div>
                  )}
                </td>
              </tr>
            </table>
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
