import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/app.css";
import useWindowDimensions from "./useWindowDimensions";

function Features() {
  const { height, width } = useWindowDimensions();
  console.log(height);
  const data = [
    {
      img: "feature1.png",
      title: "Communications",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      img: "feature2.png",
      title: "Inspired Design",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
    {
      img: "feature3.png",
      title: "Happy Customer",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    },
  ];
  return (
    <body className="featurebackground-color">
      <div className="headercolor" align="center">
        <div className="sidebarcontent1">
          <br />
          <br />
          <br />
          <label>FEATURES</label>
          <h4>
            <b>Our Features & Services</b>
          </h4>
          <br />
          <br />
        </div>
      </div>
      <Container>
        <div className="row" align="center">
          {data.map((item, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-4 ">
                <div className="cardcontainer">
                  <div className="imagecontainer">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="titlealign">
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.details}</p>
                  <div align="center" className="featuremore">
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

export default Features;
