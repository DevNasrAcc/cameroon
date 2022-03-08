import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Heading from "../../components/Heading/Heading.module";
import SubHeading from "../../components/SubHeading/SubHeading.module";
import Input from "../../components/Input/Input.module";
import LoadingOverlay from "react-loading-overlay";
import { handleData } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FORGOT_PASSWORD, LOADING_START } from "../../constants/Routes";
import "./ForgotPasswordPage.css";

function ForgotPasswordPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
  });

  const loading = useSelector((state) => state.loader.loading);

  const handleInputChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const validateField = (name, value) => {
    if (name == "search" || name == "footeremail") {
      return true;
    }
    if (name == "email") {
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
      dispatch(handleData(state, FORGOT_PASSWORD));
    }
  };

  return (
    <div className="forgot-container">
      <LoadingOverlay active={loading} spinner text="" />
      <Container>
        <form className="form-field" onSubmit={(e) => handleSubmit(e)}>
          <Heading text="Forgot Password?" />
          <SubHeading
            parentClass={true}
            text="Enter your email address below and we'll send you instructions to reset your password."
          />
          <div className="forgot-form-field">
            <Input
              placeholder="Email"
              valueName="Email"
              type="email"
              width="lg"
              height="42px"
              onChange={(e) => handleInputChange("email", e.target.value)}
              name="email"
            />
          </div>
          <button type="submit" className="button regular-btn buttoncss">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
}

export default ForgotPasswordPage;
