import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input.module";
import Edit from "../../assets/images/edit1.png";
import kite from "../../assets/images/Arrow.png";
import Button from "../../components/Button/Button.module";
import { Link } from "react-router-dom";
import history from "../../history";
import { useDispatch, useSelector } from "react-redux";
import {
  EDIT_PERSONAL_INFO,
  EDIT_ADDITIONAL_INFO,
  LOADING_START,
} from "../../constants/Routes";
import { handleData } from "../../redux/actions";
import LoadingOverlay from "react-loading-overlay";
import "./editProfile.css";

function editProfile() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: {
      address: "",
      subscription: true,
    },
    password: "",
    newPassword: "",
    confirmPassword: "",
    // registerType: "email",
    // isTerms: true
  });

  const [state2, setState2] = useState({
    address: "",
    socialMediaLinks: {
      facebook: "",
      twitter: "",
      youtube: "",
      linkedin: "",
      website: "",
    },
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const user = useSelector((state) => state.user.profile);

  useEffect(() => {
    if (user) {
      setState((state) => ({
        ...state,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: {
          address: user.email.address,
        },
      }));

      setState2((state) => ({
        ...state,
        address: user.address,
        socialMediaLinks: {
          facebook: user.socialMediaLinks ? user.socialMediaLinks.facebook : "",
          twitter: user.socialMediaLinks ? user.socialMediaLinks.twitter : "",
          youtube: user.socialMediaLinks ? user.socialMediaLinks.youtube : "",
          linkedin: user.socialMediaLinks ? user.socialMediaLinks.linkedin : "",
          website: user.socialMediaLinks ? user.socialMediaLinks.website : "",
        },
      }));
    }
  }, [user]);

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

  const handleInputChange2 = (key, value) => {
    if (key == "address") {
      setState2((state2) => ({ ...state2, [key]: value }));
    } else {
      setState2((state2) => ({
        ...state2,
        socialMediaLinks: { ...state2.socialMediaLinks, [key]: value },
      }));
    }
  };

  const validateField = (name, value) => {
    if (
      name == "search" ||
      name == "footeremail" ||
      name == "additionalinfo" ||
      name == "weblink" ||
      name == "twitter" ||
      name == "linkedin" ||
      name == "facebook" ||
      name == "youtube"
    ) {
      return true;
    }
    if (
      name == "firstName" ||
      name == "lastName" ||
      name == "userName" ||
      name == "email" ||
      name == "password" ||
      name == "confirmPassword" ||
      name == "newPassword"
    ) {
      if (value.length > 0) {
        return true;
      }
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isAllValid = true;
    let fields = document.querySelectorAll(".form-input");
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
      dispatch(handleData(state, EDIT_PERSONAL_INFO));
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    dispatch(handleData(true, LOADING_START));
    dispatch(handleData(state2, EDIT_ADDITIONAL_INFO));
  };

  return (
    <div className="editprofile">
      <LoadingOverlay active={loading} spinner text="" />
      <div className="container">
        <div className="gray-rectangle mt-4">
          <h5 className="text-center">Edit Profile</h5>
        </div>
        <div className="text-center mt-40 mb-4">
          <Link to="/app/my-profile" className="buttoncss3 mr-4">
            Basic Info
          </Link>
          <Link to="/app/edit-profile" className="buttoncss2">
            Edit Profile
          </Link>
        </div>
        <div className="gray-rectangle mb-4">
          <h6>Basic Info</h6>
        </div>
        <div className="font-Poppins pad50">
          <form className="form-field" onSubmit={(e) => handleSubmit(e)}>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="First Name"
                valueName="firstname"
                type="text"
                width="lg"
                height="40px"
                max="40"
                value={state.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                name="firstName"
              />
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="Last Name"
                valueName="lastname"
                type="text"
                width="lg"
                height="40px"
                max="40"
                value={state.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                name="lastName"
              />
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="Username"
                valueName="username"
                type="text"
                width="lg"
                height="40px"
                max="40"
                value={state.userName}
                onChange={(e) => handleInputChange("userName", e.target.value)}
                name="userName"
              />
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="Email"
                valueName="email"
                type="email"
                width="lg"
                height="40px"
                max="40"
                value={state.email.address}
                onChange={(e) => handleInputChange("email", e.target.value)}
                name="email"
              />
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="Password"
                valueName="password"
                type="password"
                width="lg"
                height="40px"
                max="40"
                onChange={(e) => handleInputChange("password", e.target.value)}
                name="password"
              />
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="New Password"
                valueName="newpassword"
                type="password"
                width="lg"
                height="40px"
                max="40"
                onChange={(e) =>
                  handleInputChange("newPassword", e.target.value)
                }
                name="newPassword"
              />
            </div>
            <div className="input-fields mb-4">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="Confirm Password"
                valueName="confirmpassword"
                type="password"
                width="lg"
                height="40px"
                max="40"
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                name="confirmPassword"
              />
            </div>
            <div className="mb-80">
              <button type="submit" className="button regular-btn buttoncss4">
                Save Changes
              </button>
              <Button
                onClick={() => history.push("/app/edit-profile")}
                className="buttoncss5"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
        <div className="gray-rectangle mb-4">
          <h6>Additional Info</h6>
        </div>
        <div className="font-Poppins pad50">
          <form className="form-field" onSubmit={(e) => handleSubmit2(e)}>
            <div className="input-fields mb-4">
              <img className="image" src={kite} />
              <label>Address</label>
              <div>
                <textarea
                  placeholder="Write Here.."
                  name="additionalinfo"
                  rows="6"
                  value={state2.address}
                  onChange={(e) =>
                    handleInputChange2("address", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="input-fields mb-2">
              <img className="image" src={kite} />
              <label>Outside Links</label>
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="Facebook Link"
                valueName="facebook"
                type="text"
                width="lg"
                height="40px"
                max="40"
                name="facebook"
                value={state2.socialMediaLinks.facebook}
                onChange={(e) => handleInputChange2("facebook", e.target.value)}
              />
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="Twitter Link"
                valueName="twitter"
                type="text"
                width="lg"
                height="40px"
                max="40"
                name="twitter"
                value={state2.socialMediaLinks.twitter}
                onChange={(e) => handleInputChange2("twitter", e.target.value)}
              />
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="YouTube Link"
                valueName="youtube"
                type="text"
                width="lg"
                height="40px"
                max="40"
                name="youtube"
                value={state2.socialMediaLinks.youtube}
                onChange={(e) => handleInputChange2("youtube", e.target.value)}
              />
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="LinkedIn"
                valueName="linkedin"
                type="text"
                width="lg"
                height="40px"
                max="40"
                name="linkedin"
                value={state2.socialMediaLinks.linkedin}
                onChange={(e) => handleInputChange2("linkedin", e.target.value)}
              />
            </div>
            <div className="input-fields">
              <img className="editimage" src={Edit} />
              <Input
                placeholder="Your Website Link"
                valueName="website"
                type="text"
                width="lg"
                height="40px"
                max="40"
                name="weblink"
                value={state2.socialMediaLinks.website}
                onChange={(e) => handleInputChange2("website", e.target.value)}
              />
            </div>
            <div className="mt-4 mb-80">
              <button type="submit" className="button regular-btn buttoncss4">
                Save Changes
              </button>
              <Button
                onClick={() => history.push("/app/edit-profile")}
                className="buttoncss5"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default editProfile;
