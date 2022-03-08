import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input.module";
import kite from "../../assets/images/Arrow.png";
import Arrow from "../../assets/images/Arrow10.png";
import Edit from "../../assets/images/edit1.png";
import Button from "../../components/Button/Button.module";

import addPicture from "../../assets/images/add-picture.png";
import removePicture from "../../assets/images/cross.png";

import "./editProject.css";
import { useDispatch, useSelector } from "react-redux";
import { handleData } from "../../redux/actions";
import {
  DELETE_PROJECT,
  EDIT_PROJECT,
  EDIT_UPLOAD_PROJECT_PHOTO,
  FETCH_CATEGORIES,
  FETCH_PROJECT_DETAIL,
  FETCH_PROJECT_ENUMS,
  LOADING_START,
} from "../../constants/Routes";
import LoadingOverlay from "react-loading-overlay";
import { getItem } from "../../localStorage/LocalStorage";
import { useHistory } from "react-router-dom";
import ProjectPicture from "../../components/projectPicture";

function editProject(props) {
  const history = useHistory();
  const userId = getItem("userid");
  const projectId = props.match.params.id;

  const [loadingIsActive, setLoadingIsActive] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoadingIsActive(false);
    }, 3000);
  }, []);

  const [state, setState] = useState({
    title: "",
    category: "",
    subCategory: "",
    socialMedia: "",
    contactInfo: "",
    purpose: "",
    tags: [],
    address: {
      location: "",
    },
    shortDescription: "",
    longDescription: "",
    pictures: [],
  });

  const [statePictures, setStatePictures] = useState({
    picture0: null,
    picture1: null,
    picture2: null,
    picture3: null,
    picture4: null,
    pictureSource0: null,
    pictureSource1: null,
    pictureSource2: null,
    pictureSource3: null,
    pictureSource4: null,
  });

  const onDeleteHandler = () => {
    const payload = {
      projectId: projectId,
      userId: userId,
    };

    dispatch(handleData(true, LOADING_START));
    dispatch(handleData(payload, DELETE_PROJECT));
  };

  const handleInputChange = (key, value) => {
    if (key === "location") {
      setState((state) => ({ ...state, address: { location: value } }));
    } else {
      setState((state) => ({ ...state, [key]: value }));
    }
  };

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const projectEnums = useSelector((state) => state.general.projectEnums);
  const project = useSelector((state) => state.project.projectDetail);
  const categories = useSelector((state) => state.category.categories);

  if (project && project.owner !== userId) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(handleData(true, LOADING_START));
    dispatchProjectDetail();
  }, []);

  useEffect(() => {
    if (
      project &&
      project.details &&
      projectEnums &&
      Object.keys(projectEnums).length > 0 &&
      projectEnums.socialMediaEnums.length > 0 &&
      projectEnums.contactInfoEnums.length > 0
    ) {
      setState((state) => ({
        ...state,
        socialMedia: projectEnums.socialMediaEnums.find(
          (item) => item === project.details.socialMedia
        ),
        contactInfo: projectEnums.contactInfoEnums.find(
          (item) => item === project.details.contactInfo
        ),
      }));
    }
  }, [project, projectEnums]);

  const dispatchProjectDetail = () => {
    dispatch(handleData(projectId, FETCH_PROJECT_DETAIL));
    dispatch(handleData({}, FETCH_CATEGORIES));
    dispatch(handleData({}, FETCH_PROJECT_ENUMS));
  };

  useEffect(() => {
    if (project && project.details && categories && categories.length > 0) {
      const selectedCategory = categories.find(
        (item) => item?._id === project.details.category
      )?._id;
      const selectedCategoryIndex = categories.findIndex(
        (item) => item?._id === project.details.category
      );
      const selectedSubCategory = categories[
        selectedCategoryIndex
      ]?.subcategory.find(
        (item) => item?._id === project.details.subCategory
      )?._id;

      setState((state) => ({
        ...state,
        title: project.details.title,
        address: {
          location: project.details.address?.location,
        },
        category: selectedCategory,
        subCategory: selectedSubCategory,
        purpose: project.details.purpose,
        tags: project.tags && project.tags.map((tag) => " " + tag.text),
        shortDescription: project.details.shortDescription,
        longDescription: project.details.longDescription,
        pictures: project.details.photos,
      }));
    }
  }, [project, categories]);

  const onImageChange = (event, key, keySource) => {
    if (event.target.files && event.target.files[0]) {
      setStatePictures((state) => ({
        ...state,
        [key]: URL.createObjectURL(event.target.files[0]),
        [keySource]: event.target.files[0],
      }));
    }
  };

  const handleSubmit = () => {
    let tags = state.tags;
    delete state.tags;

    tags = tags.map((tag) => {
      return { text: tag.trim() };
    });

    let payload = {
      _id: projectId,
      userId: userId,
      details: state,
      tags: tags,
      pictures: statePictures,
    };

    dispatch(handleData(true, LOADING_START));

    if (
      statePictures.pictureSource0 ||
      statePictures.pictureSource1 ||
      statePictures.pictureSource2 ||
      statePictures.pictureSource3 ||
      statePictures.pictureSource4
    ) {
      dispatch(handleData(payload, EDIT_UPLOAD_PROJECT_PHOTO));
    } else {
      payload.details.photos = payload.details.pictures;
      dispatch(handleData(payload, EDIT_PROJECT));
    }
  };

  if (!project) {
    return null;
  }

  return (
    <div className="editProject">
      <LoadingOverlay active={loading} spinner text="" />

      <div className="container">
        <div className="gray-rectangle mt-4">
          <h5>Edit your project</h5>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="gray-rectangle mb-4">
              <h6>Media</h6>
            </div>
            <div className="font-Poppins pad40">
              <div className="mb-4">
                <div className="main-image-container mb-2">
                  {/*{state.pictures[0] && <div className="main-image-remove">*/}
                  {/*  <img src={removePicture} alt="Remove Picture"/>*/}
                  {/*</div>}*/}

                  {!state.pictures[0] && (
                    <LoadingOverlay active={loadingIsActive} spinner text="" />
                  )}
                  {!statePictures.picture0 &&
                    !state.pictures[0] &&
                    !loadingIsActive && (
                      <div className="add">
                        <img src={addPicture} alt="Add Image" />
                      </div>
                    )}
                  {state.pictures[0] && (
                    <img
                      className="picture"
                      src={state.pictures[0]?.url}
                      alt="Main project picture"
                      loading="lazy"
                    />
                  )}

                  {statePictures.picture0 && (
                    <img
                      className="picture"
                      src={statePictures.picture0}
                      alt="preview image"
                    />
                  )}

                  {!state.pictures[0] && !loadingIsActive && (
                    <input
                      type="file"
                      onChange={(e) =>
                        onImageChange(e, "picture0", "pictureSource0")
                      }
                    />
                  )}
                </div>
                <div className="thumbnails">
                  <ProjectPicture
                    state={state}
                    statePictures={statePictures}
                    loadingIsActive
                    onImageChange={onImageChange}
                  />
                </div>
              </div>
            </div>

            <div className="gray-rectangle mb-4">
              <h6>Basic Info</h6>
            </div>
            <div className="font-Poppins pad70">
              <div className="input-fields mb-4">
                <img className="image" src={kite} />
                <label>Detailed Description</label>
                <p>Describe your project in detail.</p>
                <textarea
                  placeholder="Description"
                  value={state.longDescription}
                  maxLength="150"
                  rows="6"
                  onChange={(e) =>
                    handleInputChange("longDescription", e.target.value)
                  }
                />
              </div>
              <div className="input-fields mb-4">
                <img className="image" src={kite} />
                <label>Location</label>
                <p>Select location where you are running the campaign.</p>
                <div style={{ width: "fit-content", position: "relative" }}>
                  <img className="imageArrow" src={Arrow} alt="Arrow" />
                  <Input
                    placeholder="Enter here"
                    valueName="Enter here"
                    type="text"
                    width="lg"
                    height="40px"
                    max="120"
                    value={state.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="input-fields mb-4">
                <img className="image" src={kite} />
                <label>Connect to social media networks</label>
                <p>Choose the media you want to connect.</p>
                <div style={{ width: "fit-content", position: "relative" }}>
                  <img className="imageArrow" src={Arrow} alt="Arrow" />
                  <select
                    className="form-input info-select"
                    name="socialMedia"
                    value={state.socialMedia}
                    onChange={(e) =>
                      handleInputChange("socialMedia", e.target.value)
                    }
                  >
                    <option disabled value="">
                      Please Select
                    </option>
                    {projectEnums &&
                      Object.keys(projectEnums).length > 0 &&
                      projectEnums.socialMediaEnums.length > 0 &&
                      projectEnums.socialMediaEnums.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="input-fields mb-4">
                <img className="image" src={kite} />
                <label>Tags</label>
                <p>Write five keywords for your campaign.</p>
                <Input
                  placeholder="Enter here"
                  valueName="Enter here"
                  type="text"
                  width="lg"
                  height="40px"
                  max="40"
                  value={state.tags}
                  onChange={(e) => handleInputChange("tags", e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4 text-center">
              <Button onClick={onDeleteHandler} className="buttoncss2">
                Delete project
              </Button>
            </div>
            <div className="gray-rectangle mb-4">
              <h6>Edit</h6>
            </div>
            <div className="font-Poppins pad70">
              <div className="input-fields mb-4">
                <img className="image" src={kite} />
                <label>
                  Project's Purpose <span>*</span>
                  <img className="editimage" src={Edit} />
                </label>
                <p>What is the purpose of your project?</p>
                <Input
                  placeholder="Purpose"
                  valueName="Purpose"
                  type="text"
                  width="lg"
                  height="40px"
                  max="40"
                  value={state.purpose}
                  onChange={(e) => handleInputChange("purpose", e.target.value)}
                />
              </div>
              <div className="input-fields mb-4">
                <img className="image" src={kite} />
                <label>
                  Project Title <span>*</span>
                  <img className="editimage" src={Edit} alt="Edit" />
                </label>
                <p>What is the title of your project?</p>
                <Input
                  placeholder="Title"
                  valueName="Title"
                  type="text"
                  width="lg"
                  height="40px"
                  max="40"
                  value={state.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>
              <div className="input-fields mb-4">
                <img className="image" src={kite} />
                <label>
                  Project Description <span>*</span>
                  <img className="editimage" src={Edit} />
                </label>
                <p>Describe your project.</p>
                <textarea
                  placeholder="Description"
                  value={state.shortDescription}
                  maxLength="150"
                  rows="6"
                  onChange={(e) =>
                    handleInputChange("shortDescription", e.target.value)
                  }
                />
              </div>
              <div className="input-fields mb-4">
                <img className="image" src={kite} />
                <label>
                  Project Category <span>*</span>
                  <img className="editimage" src={Edit} alt="Edit" />
                </label>
                <p>What is the category of your project?</p>
                <div style={{ width: "fit-content", position: "relative" }}>
                  <img className="imageArrow" src={Arrow} />
                  <select
                    className="form-input"
                    name="category"
                    value={state.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                  >
                    <option disabled value="">
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
                  Project Sub-Category
                  <img className="editimage" src={Edit} />
                </label>
                <p>What is the sub-category of your project?</p>
                <div style={{ width: "fit-content", position: "relative" }}>
                  <img className="imageArrow" src={Arrow} alt="Arrow" />
                  <select
                    className="form-input"
                    name="subCategory"
                    value={state.subCategory}
                    onChange={(e) =>
                      handleInputChange("subCategory", e.target.value)
                    }
                  >
                    <option disabled value="">
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
                  <img className="editimage" src={Edit} alt="Edit" />
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
                    <option disabled value="">
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
              <div className="action-btns mb-80">
                <Button onClick={() => handleSubmit()} className="buttoncss2">
                  Edit project
                </Button>
                <Button onClick={() => alert(1)} className="buttoncss3">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default editProject;
