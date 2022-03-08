import React, { useEffect, useState } from "react";
import image from "../../assets/images/rocketimg.png";
import Input from "../../components/Input/Input.module";
import kite from "../../assets/images/Arrow.png";
import Arrow from "../../assets/images/Arrow10.png";
import Button from "../../components/Button/Button.module";
import { handleData } from "../../redux/actions";
import {
  FETCH_CATEGORIES,
  FETCH_PROJECT_ENUMS,
  LOADING_START,
  UPLOAD_PROJECT_PHOTO,
} from "../../constants/Routes";
import { useDispatch, useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import history from "../../history";

import "./createProject.css";
import category from "../../redux/reducers/category";
import { getItem } from "../../localStorage/LocalStorage";

function createProject() {
  const userId = getItem("userid");
  const [state, setState] = useState({
    title: "",
    shortDescription: "",
    category: "",
    subCategory: "",
    contactInfo: "",
    picture: null,
    pictureSource: null,
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const categories = useSelector((state) => state.category.categories);
  const projectEnums = useSelector((state) => state.general.projectEnums);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(handleData(true, LOADING_START));
    dispatch(handleData({}, FETCH_CATEGORIES));
    dispatch(handleData({}, FETCH_PROJECT_ENUMS));
  }, []);

  const handleInputChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const validateField = (name, value) => {
    if (name == "search" || name == "footeremail") {
      return true;
    }
    if (
      name == "title" ||
      name == "shortDescription" ||
      name == "category" ||
      name == "subCategory" ||
      name == "contactInfo"
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

    if (isAllValid && state.picture) {
      const payload = {
        userId: userId,
        details: state,
      };

      dispatch(handleData(true, LOADING_START));
      dispatch(handleData(payload, UPLOAD_PROJECT_PHOTO));
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setState((state) => ({
        ...state,
        picture: URL.createObjectURL(event.target.files[0]),
        pictureSource: event.target.files[0],
      }));
    }
  };

  return (
    <div className="createProject">
      <LoadingOverlay active={loading} spinner text="" />
      <div className="container">
        <div className="flex-center">
          <div className="imgDiv">
            <img src={image} />
          </div>
        </div>
        <h5 className="flex-center">Let’s get ready to start your project!</h5>
        <div className="gray-rectangle">
          <h6>Create Project</h6>
        </div>
        <div className="font-Poppins pad120">
          <form className="form-field" onSubmit={(e) => handleSubmit(e)}>
            <p className="p1">Fill in the required fields.</p>
            <p className="p2">
              Make a good first impression: introduce your project objectives
              and entice people to learn more.
            </p>
            <hr />
            <div className="input-fields mb-4">
              <img className="image" src={kite} />
              <label>
                Project Title <span>*</span>
              </label>
              <p>What is the title of your project?</p>
              <Input
                className="form-input"
                placeholder="Title"
                valueName="title"
                type="text"
                width="lg"
                height="40px"
                max="40"
                onChange={(e) => handleInputChange("title", e.target.value)}
                name="title"
              />
              <p className="p-char">40 characters</p>
            </div>
            <div className="input-fields mb-4">
              <img className="image" src={kite} alt="Image" />
              <label>
                Project Picture <span>*</span>
              </label>
              <p>640 x 640, 220 x 220 min resolution</p>
              {state.picture && (
                <div className="project-picture">
                  <img src={state.picture} alt="preview image" />
                </div>
              )}
              <label className="custom-file-upload">
                <input type="file" onChange={onImageChange} />
                Upload
              </label>
            </div>
            <div className="input-fields mb-4">
              <img className="image" src={kite} alt="image" />
              <label>
                Project Description <span>*</span>
              </label>
              <p>Describe your project</p>
              <textarea
                className="form-input"
                placeholder="Description"
                maxLength="150"
                rows="6"
                name="shortDescription"
                onChange={(e) =>
                  handleInputChange("shortDescription", e.target.value)
                }
              />
              <p className="p-char">150 characters</p>
            </div>
            <div className="input-fields mb-4">
              <img className="image" src={kite} />
              <label>
                Project Category <span>*</span>
              </label>
              <p>What is the category of your project?</p>
              <div style={{ width: "fit-content", position: "relative" }}>
                <img className="imageArrow" src={Arrow} alt="image" />

                <select
                  className="form-input"
                  name="category"
                  value={state.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                >
                  <option selected disabled value="">
                    Please Select
                  </option>
                  {categories.length > 0 &&
                    categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="input-fields mb-4">
              <img className="image" src={kite} />
              <label>
                Project Sub-Category <span>*</span>
              </label>
              <p>What is the sub-category of your project?</p>
              <div style={{ width: "fit-content", position: "relative" }}>
                <img className="imageArrow" src={Arrow} />

                <select
                  className="form-input"
                  name="subCategory"
                  value={state.subCategory}
                  onChange={(e) =>
                    handleInputChange("subCategory", e.target.value)
                  }
                >
                  <option selected disabled value="">
                    Please Select
                  </option>
                  {categories.length > 0 &&
                    categories.map((category) => {
                      if (state.category === category._id) {
                        return (
                          category.subcategory.length > 0 &&
                          category.subcategory.map((item) => (
                            <option key={item._id} value={item._id}>
                              {item.name}
                            </option>
                          ))
                        );
                      }
                    })}
                </select>
              </div>
            </div>
            <div className="input-fields mb-4">
              <img className="image" src={kite} />
              <label>
                Contact Info <span>*</span>
              </label>
              <p>Choose the options that are suitable for you.</p>
              <div style={{ width: "fit-content", position: "relative" }}>
                <img className="imageArrow" src={Arrow} alt="Arrow" />
                <select
                  className="form-input info-select"
                  name="contactInfo"
                  value={state.contactInfo}
                  onChange={(e) =>
                    handleInputChange("contactInfo", e.target.value)
                  }
                >
                  <option selected disabled value="">
                    Please Select
                  </option>
                  {projectEnums &&
                    Object.keys(projectEnums).length > 0 &&
                    projectEnums.contactInfoEnums.length > 0 &&
                    projectEnums.contactInfoEnums.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="mb-80">
              <button type="submit" className="button regular-btn buttoncss2">
                Submit
              </button>
              <Button onClick={() => history.push("/")} className="buttoncss3">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default createProject;
