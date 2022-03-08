import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Heading from "../../components/Heading/Heading.module";
import LoadingOverlay from "react-loading-overlay";
import SubHeading from "../../components/SubHeading/SubHeading.module";
import Input from "../../components/Input/Input.module";
import { useDispatch, useSelector } from "react-redux";
import { SIGNIN, LOADING_START } from "../../constants/Routes";
import Label from "../../components/Label/Label.module";
import { Link } from "react-router-dom";
import { handleData } from "../../redux/actions";
import "./LoginPage.css";

function LoginPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const loading = useSelector((state) => state.loader.loading);

  const handleInputChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const validateField = (name, value) => {
    if (name == "search" || name == "footeremail") {
      return true;
    }
    if (name == "email" || name == "password") {
      if (value.length > 0) {
        return true;
      }
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var isAllValid = true;
    var fields = document.querySelectorAll(".form-input");
    Array.from(fields).map((field, key) => {
      if (validateField(field.name, field.value)) {
        document
          .getElementsByName(field.name)[0]
          .classList.remove("is-invalid");
        document.getElementsByName(field.name)[0].classList.add("is-valid");
      } else {
        document.getElementsByName(field.name)[0].classList.add("is-invalid");
        document.getElementsByName(field.name)[0].classList.remove("is-valid");
        isAllValid = false;
      }
    });
    if (isAllValid) {
      dispatch(handleData(true, LOADING_START));
      dispatch(handleData(state, SIGNIN));
    }
  };

  return (
    <div className="login-container">
      <LoadingOverlay active={loading} spinner text="" />
      <Container>
        <form className="form-field" onSubmit={(e) => handleSubmit(e)}>
          <Heading text="Welcome!" />
          <SubHeading text="Log in to continue" />
          <div className="form-field">
            <Input
              placeholder="Email"
              valueName="Email"
              type="email"
              width="lg"
              height="42px"
              onChange={(e) => handleInputChange("email", e.target.value)}
              name="email"
            />
            <Input
              placeholder="Password"
              valueName="Password"
              type="password"
              width="lg"
              height="42px"
              onChange={(e) => handleInputChange("password", e.target.value)}
              name="password"
            />
          </div>
          <button type="submit" className="button regular-btn buttoncss">
            Login
          </button>
        </form>
        <div className="forgot-redirect">
          <Link to="/auth/forgot">
            <Label cssClass="label-link" text="Forgot Password?" size="12px" />
          </Link>
        </div>
        <div className="register-redirect">
          <Link to="/auth/register">
            <Label
              cssClass="label-link"
              text="Don’t have an account? Sign up now!"
              size="12px"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;
