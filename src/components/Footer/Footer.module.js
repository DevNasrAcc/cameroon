import React from "react";
import "./Footer.css";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button.module";
import Input from "../../components/Input/Input.module";

const Footer = ({ page }) => {
  return (
    <footer className={`${page === "auth" ? "fixed-footer" : ""}`}>
      <div className="footer-nav" style={{ paddingBottom: "0" }}>
        <Container className="footer-container">
          <Row>
            {/* <Link to="/"><img src={Logo} alt="Logo" /></Link> */}
            <strong className="navTitle2" href="#">
              Subscribe to our <span>Newsletter</span>.
            </strong>
          </Row>
          <Row>
            <Input
              placeholder="Type your Email"
              valueName="email"
              type="email"
              width="sm"
              height="38px"
              name="footeremail"
              // onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <Button onClick={() => alert(1)} className="buttoncss4">
              Send
            </Button>
          </Row>
        </Container>
        <hr style={{ marginBottom: "0" }} />
      </div>
      <div className="footer-nav">
        <Container className="footer-container">
          <Row>
            {/* <Link to="/"><img src={Logo} alt="Logo" /></Link> */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <strong className="navTitle" href="#">
                Investing in
                <br />
                <span>Cameroon</span>
              </strong>
            </Link>
          </Row>
          <hr className="vertical" />
          <Navbar className="menu-items">
            <Container>
              <Nav className="me-auto">
                <Nav.Link>About Us</Nav.Link>
                <Nav.Link>How It Works</Nav.Link>
                <Nav.Link>Privacy</Nav.Link>
                <Nav.Link>Terms & Agreements</Nav.Link>
                <Nav.Link>Contact Us</Nav.Link>
                <Nav.Link>Help Center</Nav.Link>
                <Nav.Link>Suggestions</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </div>
      <div className="footer-copyright">
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <i
                className="fa fa-envelope-o footer-icon"
                aria-hidden="true"
              ></i>
              <span>info@investingincameroon.com</span>
            </div>
            <div>
              <i className="fa fa-instagram footer-icon" aria-hidden="true"></i>
              <i className="fa fa-linkedin footer-icon" aria-hidden="true"></i>
              <i
                className="fa fa-facebook-official footer-icon"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
