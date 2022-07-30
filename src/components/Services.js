import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/app.css";
import useWindowDimensions from "./useWindowDimensions";

function Services() {
  const { height, width } = useWindowDimensions();
  console.log(height);
  const data = [
    {
      img: "software1.png",
      title: "Software Solution",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      img: "ecommerce.png",
      title: "E-Commerce Solution",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      img: "erp.png",
      title: "ERP Solution",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      img: "bulk.png",
      title: "Bulk SMS Service",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      img: "graphic.png",
      title: "Graphic Design",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      img: "marketing.png",
      title: "Digital Marketing",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
  ];
  return (
    <body className="background-color">
      <Container className="homecontainer">
        <Row>
          <Col xs={12} md={6}></Col>

          <Col xs={12} md={6} align="right">
            <div className="linkposition">
              <ul>
                <li>
                  <Link className="link1 " to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link1 activelink" to="/services">
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
      </Container>
      <Container>
        <Row>
          <Col>
            <div id="planelogo3">
              <img src="wholeplane.png" alt="" id="plane" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header" align="center">
        <div className="sidebarcontent">
          <label>SERVICES</label>
          <h4>We provides services to our clients</h4>
          <br />
          <br />
        </div>
      </div>
      <Container>
        <div className="row" align="center">
          {data.map((item, index) => {
            return (
              <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className="cardcontainer">
                  <div className="imagecontainer">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="titlealignment">
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.details}</p>
                  <div align="center" className="morebutton">
                    <a href="/">MORE</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </body>
  );
}

export default Services;
