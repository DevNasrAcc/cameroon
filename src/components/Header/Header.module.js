import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from "../../assets/images/landingpage.jpg";
import Button from "../Button/Button.module";

import "./Header.css";

const Header = ({}) => {
  return (
    <div className="header">
      <Carousel autoPlay={false} showIndicators={false}>
        <div>
          <img alt="" src={image} />
          <div className="textHeader">
            <div className="p1 mb-3">
              <hr className="vertical" />
              Featured Content
            </div>
            <p className="p2">Lorem Ipsum</p>
            <h1>Lorem Ipsum</h1>
            <p className="p3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <Button onClick={() => alert(1)} className="buttoncss">
              Read More
            </Button>
          </div>
        </div>
        <div>
          <img alt="" src={image} />
          <div className="textHeader">
            <div className="p1 mb-3">
              <hr className="vertical" />
              Featured Content
            </div>
            <p className="p2">Lorem Ipsum</p>
            <h1>Lorem Ipsum</h1>
            <p className="p3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <Button onClick={() => alert(1)} className="buttoncss">
              Read More
            </Button>
          </div>
        </div>
        <div>
          <img alt="" src={image} />
          <div className="textHeader">
            <div className="p1 mb-3">
              <hr className="vertical" />
              Featured Content
            </div>
            <p className="p2">Lorem Ipsum</p>
            <h1>Lorem Ipsum</h1>
            <p className="p3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <Button onClick={() => alert(1)} className="buttoncss">
              Read More
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
