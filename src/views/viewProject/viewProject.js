import React, { useEffect, useState } from "react";
import image from "../../assets/images/Rectangle7.jpg";
import SideBar from "../../components/Sidenav/Sidenav";
import Button from "../../components/Button/Button.module";
import ImageGallery from "react-image-gallery";
import { Link, useHistory } from "react-router-dom";

import "react-image-gallery/styles/css/image-gallery.css";
import "./viewProject.css";
import { useDispatch, useSelector } from "react-redux";
import { handleData } from "../../redux/actions";
import {
  DELETE_PROJECT,
  FETCH_PROJECT_DETAIL,
  LIKE_PROJECT,
  LOADING_START,
  SAVE_PROJECT,
} from "../../constants/Routes";
import LoadingOverlay from "react-loading-overlay";
import { getItem } from "../../localStorage/LocalStorage";

function viewProject(props) {
  const history = useHistory();
  const projectId = props.match.params.id;

  const userId = getItem("userid");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const project = useSelector((state) => state.project.projectDetail);

  const [isUserLiked, setIsUserLiked] = useState(false);
  const [shouldUpdateLikesCount, setShouldUpdateLikesCount] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    dispatch(handleData(true, LOADING_START));
    dispatch(handleData(projectId, FETCH_PROJECT_DETAIL));
  }, []);

  useEffect(() => {
    if (project) {
      setTotalLikes(project.totalLikes);
      setIsUserLiked(!!project.isLiked);
    }
  }, [project]);

  useEffect(() => {
    setTotalLikes(isUserLiked ? totalLikes + 1 : totalLikes - 1);
  }, [shouldUpdateLikesCount]);

  const onProjectActionHandler = (e, type) => {
    e.stopPropagation();

    const payload = { _id: project._id };
    if (type === "like") {
      dispatch(handleData(payload, LIKE_PROJECT));
      setIsUserLiked(!isUserLiked);
      setShouldUpdateLikesCount(!shouldUpdateLikesCount);
    } else if (type === "save") {
      dispatch(handleData(payload, SAVE_PROJECT));
    }
  };

  const onDeleteHandler = () => {
    const payload = {
      projectId: projectId,
      userId: userId,
    };

    dispatch(handleData(true, LOADING_START));
    dispatch(handleData(payload, DELETE_PROJECT));
  };

  return (
    <div className="viewProjectPage">
      <LoadingOverlay active={loading} spinner text="" />

      <div className="container">
        <div className="text-end mt-6">
          <label className="labeltext">Sort by:</label>
          <select className="selectClass">
            <option value="Likes">Likes</option>
            <option value="Most Funded">Most Funded</option>
            <option value="Day Posted">Day Posted</option>
            <option value="Alphabetic Order">Alphabetic Order</option>
          </select>
          <label className="labeltext">Filter by:</label>
          <select className="selectClass">
            <option value="Categories">Categories</option>
            <option value="Project">Project</option>
            <option value="Objectives">Objectives</option>
          </select>
        </div>
        <div className="similarPDiv">
          <Link to="/app/my-projects" className="similarP">
            View Similar Projects
          </Link>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-12 mgt-90"
            style={{ position: "relative" }}
          >
            <SideBar />
          </div>

          {project && (
            <div id="main" className="col-lg-8 col-md-8 col-sm-12">
              {project.owner === userId && (
                <div className="row mt-4 mb-4">
                  <div className="text-center">
                    <Button
                      onClick={() =>
                        history.push(`/app/edit-project/${projectId}`)
                      }
                      className="buttoncss"
                    >
                      Edit Project
                    </Button>
                    <Button onClick={onDeleteHandler} className="buttoncss">
                      Delete Project
                    </Button>
                  </div>
                </div>
              )}
              <div className="card mt-40">
                <div style={{ position: "relative" }}>
                  <ImageGallery
                    items={
                      project &&
                      project.details.photos &&
                      project.details.photos.map((photo) => ({
                        original: photo.url,
                        thumbnail: photo.url,
                      }))
                    }
                  />
                </div>
                <div className="card-body p-70">
                  <p className="text_category">
                    CATEGORY | SUB-CATEGORY{" "}
                    <span>
                      <b>
                        {totalLikes} {`Like${totalLikes > 1 ? "s" : ""}`}
                      </b>
                      <i
                        className={`${
                          isUserLiked ? "fa fa-heart red" : "far fa-heart"
                        }`}
                        onClick={(e) => onProjectActionHandler(e, "like")}
                      />
                      <i className="fa fa-share-alt" />
                      <i
                        className="far fa-bookmark"
                        onClick={(e) => onProjectActionHandler(e, "save")}
                      />
                    </span>
                  </p>
                  <hr />
                  <div className="flex-between">
                    <h5 className="card-title">{project.details.title}</h5>
                    <div className="socialIcons">
                      <i className="fab fa-linkedin" />
                      <i className="fab fa-instagram" />
                      <i className="fab fa-facebook" />
                    </div>
                  </div>
                  <p className="card-text">
                    {project.details.shortDescription}
                  </p>
                  <p className="card-text2">
                    Purpose: {project.details.purpose || "N/A"}
                  </p>
                  <p className="card-text3">
                    <i className="fa fa-map-marker-alt locIcon" />
                    {project.details.address
                      ? project.details.address.location
                      : "N/A"}
                  </p>
                  <p className="card-text4">Detailed Description</p>
                  <p className="card-text mb-4">
                    {project.details.longDescription}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default viewProject;
