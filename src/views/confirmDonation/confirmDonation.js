import React from "react";
import image from "../../assets/images/Rectangle7.jpg";
import Button from "../../components/Button/Button.module";
import ImageGallery from "react-image-gallery";
import Input from "../../components/Input/Input.module";
import { Link } from "react-router-dom";

import "react-image-gallery/styles/css/image-gallery.css";
import "./confirmDonation.css";

const images = [
  {
    original: image,
    thumbnail: image,
  },
  {
    original: image,
    thumbnail: image,
  },
  {
    original: image,
    thumbnail: image,
  },
];

function confirmDonation() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="confirmDonation">
      <div className="container">
        <div className="similarPDiv">
          <Link to="/app/my-projects" className="similarP">
            View Similar Projects
          </Link>
        </div>
        <div className="row">
          <div
            className="col-lg-5 col-md-5 col-sm-12"
            style={{ position: "relative" }}
          >
            <div className="gray-rectangle mb-4">
              <h6>Donation Information</h6>
            </div>
            <div className="font-Poppins">
              <div className="input-fields">
                <Input
                  placeholder="First Name"
                  valueName="firstname"
                  type="text"
                  width="lg"
                  height="38px"
                  // onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="input-fields">
                <Input
                  placeholder="Donation Made for"
                  valueName="investment"
                  type="text"
                  width="lg"
                  height="38px"
                  // onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="input-fields">
                <Input
                  placeholder="Total Amount"
                  valueName="total"
                  type="text"
                  width="lg"
                  height="38px"
                  // onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="input-fields mt-2">
                <label>Name on Card</label>
                <Input
                  placeholder=""
                  valueName="cardname"
                  type="text"
                  width="lg"
                  height="38px"
                  // onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="input-fields row mt-2">
                <div className="col-md-5 col-sm-12 pad">
                  <label>Card Number</label>
                  <Input
                    placeholder=""
                    valueName="cardnumber"
                    type="text"
                    width="webkit"
                    height="38px"
                    // onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                <div className="col-md-4 col-sm-12 pad">
                  <label>Expiry</label>
                  <Input
                    placeholder=""
                    valueName="expiry"
                    type="text"
                    width="webkit"
                    height="38px"
                    // onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-12 pad">
                  <label>CVV</label>
                  <Input
                    placeholder=""
                    valueName="cvv"
                    type="text"
                    width="webkit"
                    height="38px"
                    // onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button onClick={() => alert(1)} className="buttoncss4">
                  Confirm
                </Button>
                <Button onClick={() => alert(1)} className="buttoncss5">
                  Back
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div id="main" className="col-lg-6 col-md-6 col-sm-12">
            <div className="card mt-40">
              <div style={{ position: "relative" }}>
                {/* <img className="card-img-top" src={image} alt="Card image cap"/> */}
                <ImageGallery items={images} />
              </div>
              <div className="card-body p-70">
                <p className="text_category">
                  CATEGORY | SUB-CATEGORY{" "}
                  <span>
                    <b>123 Likes</b>
                    <i className="far fa-heart"></i>
                    <i className="fa fa-share"></i>
                    <i className="fa fa-ribbon"></i>
                  </span>
                </p>
                <hr />
                <div className="flex-between">
                  <h5 className="card-title">Project Title</h5>
                  <div className="socialIcons">
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                  </div>
                </div>
                <p className="card-text">
                  Brief Description - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut.
                </p>
                <p className="card-text2">project’s purpose</p>
                <p className="card-text3">
                  <i className="fa fa-map-marker-alt locIcon" />
                  PROJECT LOCATION
                </p>
                <p className="card-text4">Detailed Description</p>
                <p className="card-text mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default confirmDonation;
