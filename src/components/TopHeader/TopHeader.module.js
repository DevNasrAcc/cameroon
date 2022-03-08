import React, { Fragment, useState } from "react";
import {
  Navbar,
  Container,
  Image,
  Col,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

import "./TopHeader.css";
import Button from "../Button/Button.module";
import { Link, useHistory } from "react-router-dom";
import usa from "../../assets/images/usaflag.png";
import france from "../../assets/images/franceflag.png";
// import Logo from "../../assets/images/logo.png";
import Search from "../Search/Search.module";
import Label from "../Label/Label.module";
import { getItem, clear } from "../../localStorage/LocalStorage";
import { useDispatch } from "react-redux";
import { handleData } from "../../redux/actions";
import { SIGNOUT } from "../../constants/Routes";
import i18n from "i18next";

const Header = ({ page }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [flags, setFlags] = useState(usa);

  const setNewFlag = (value) => {
    if (value === "fr") {
      setFlags(france);
    } else {
      setFlags(usa);
    }

    i18n.changeLanguage(value);
  };

  const logoutSession = () => {
    dispatch(handleData({}, SIGNOUT));
    clear().then((r) => r);
  };

  let userfullname = getItem("userfullname");

  return (
    <Navbar expand="lg" className="top-header">
      <Container>
        <Navbar.Brand className="line-height-1">
          <Link to="/" style={{ textDecoration: "none" }}>
            <strong className="navTitle" href="#">
              Investing in
              <br />
              <span>Cameroon</span>
            </strong>
          </Link>
          {/* <Link to="/"><img src={Logo} alt="Logo" /></Link> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>How it works</Nav.Link>
            <NavDropdown title="Explore">
              <NavDropdown.Item>
                <Link
                  to="/app/projects"
                  className="a-lnk"
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  Explore Projects
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/app/settings"
                  className="a-lnk"
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  Settings
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/app/my-profile"
                  className="a-lnk"
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  My Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/app/my-investment"
                  className="a-lnk"
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  My Investment
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                Something else here
                            </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link>Similar Project</Nav.Link>
          </Nav>
          <Search width="sm" height="40px" />
          <Button
            onClick={() => history.push("/app/create-project")}
            className="buttoncss"
          >
            Create a project
          </Button>

          {userfullname === null ? (
            <div className="auth-nav me-auto my-2 my-lg-0">
              <Link to="/auth/login">
                <Label text="Sign in / Sign up" cssClass="header-label" />
              </Link>
            </div>
          ) : (
            <Fragment>
              <NavDropdown
                title={
                  <div className="flagsDiv">
                    <img className="flags" src={flags} alt="user pic" />
                  </div>
                }
              >
                <NavDropdown.Item onClick={(e) => setNewFlag("en")}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setNewFlag("fr")}>
                  French
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={userfullname}>
                <NavDropdown.Item>
                  <Link
                    to="/app/my-profile"
                    className="a-lnk"
                    style={{ textDecoration: "none", color: "#212529" }}
                  >
                    My Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/app/my-projects"
                    className="a-lnk"
                    style={{ textDecoration: "none", color: "#212529" }}
                  >
                    My Projects
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/app/my-investment"
                    className="a-lnk"
                    style={{ textDecoration: "none", color: "#212529" }}
                  >
                    My Investments
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/app/my-projects"
                    className="a-lnk"
                    style={{ textDecoration: "none", color: "#212529" }}
                  >
                    Saved Projects
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/app/my-projects"
                    className="a-lnk"
                    style={{ textDecoration: "none", color: "#212529" }}
                  >
                    Recommended for you
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/app/settings"
                    className="a-lnk"
                    style={{ textDecoration: "none", color: "#212529" }}
                  >
                    Settings
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/"
                    className="a-lnk"
                    style={{ textDecoration: "none", color: "#212529" }}
                    onClick={() => logoutSession()}
                  >
                    Log out
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Fragment>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
