import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Heading from "../../components/Heading/Heading.module";
import LoadingOverlay from "react-loading-overlay";
import SubHeading from "../../components/SubHeading/SubHeading.module";
import Input from "../../components/Input/Input.module";
import Label from "../../components/Label/Label.module";
import { useDispatch } from "react-redux";
import { SIGNUP, LOADING_START } from "../../constants/Routes";
import { handleData } from "../../redux/actions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: {
      address: "",
      subscription: true,
    },
    password: "",
    registerType: "email",
    isTerms: true,
  });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleInputChange = (key, value) => {
    if (key == "email") {
      setState((state) => ({
        ...state,
        email: { address: value, subscription: true },
      }));
    } else {
      setState((state) => ({ ...state, [key]: value }));
    }
  };

  const validateField = (name, value) => {
    if (name == "search" || name == "footeremail") {
      return true;
    }
    if (
      name == "firstname" ||
      name == "lastname" ||
      name == "username" ||
      name == "email" ||
      name == "password"
    ) {
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

    var terms = document.getElementsByName("terms");
    if (isAllValid) {
      if (terms[0].checked) {
        dispatch(handleData(true, LOADING_START));
        dispatch(handleData(state, SIGNUP));
      } else {
        toast.error("Please agree to the terms of use", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  return (
    <div className="register-container">
      <LoadingOverlay active={loading} spinner text="" />
      <Container>
        <Heading text="Welcome!" />
        <SubHeading text="Sign up to join" />
        <form className="form-field" onSubmit={(e) => handleSubmit(e)}>
          <Input
            placeholder="First Name"
            valueName="First Name"
            type="string"
            width="lg"
            height="42px"
            name="firstname"
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
          <Input
            placeholder="Last Name"
            valueName="Last Name"
            type="string"
            width="lg"
            height="42px"
            name="lastname"
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
          <Input
            placeholder="Username"
            valueName="Username"
            type="string"
            width="lg"
            height="42px"
            name="username"
            onChange={(e) => handleInputChange("userName", e.target.value)}
          />
          <Input
            placeholder="Email"
            valueName="Email"
            type="email"
            width="lg"
            height="42px"
            name="email"
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <Input
            placeholder="Password"
            valueName="Password"
            type="password"
            width="lg"
            height="42px"
            name="password"
            onChange={(e) => handleInputChange("password", e.target.value)}
          />

          <div className="terms-field">
            <Input type="checkbox" id="terms" name="terms" />
            <Label
              cssClass="label-link"
              text="I agree to the terms of use"
              size="12px"
            />
          </div>

          <button type="submit" className="button regular-btn buttoncss">
            Create Account
          </button>
        </form>
        <div className="redirect-link">
          <Link to="/auth/login">
            <Label
              cssClass="label-link"
              text="Already have an account? Log in now!"
              size="12px"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
