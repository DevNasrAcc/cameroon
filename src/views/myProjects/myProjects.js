import React, { useEffect, useState } from "react";
import CarouselComponent from "../../components/Carousel/Carousel";
import "./myProjects.css";
import { useDispatch, useSelector } from "react-redux";
import { handleData } from "../../redux/actions";
import {
  FETCH_LIKED_PROJECTS,
  FETCH_MY_PROJECTS, FETCH_RECOMMENDED_PROJECTS,
  FETCH_SAVED_PROJECTS,
  LOADING_END,
  LOADING_START,
} from "../../constants/Routes";
import LoadingOverlay from "react-loading-overlay";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function myProjects() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const projects = useSelector((state) => state.project);

  const [selectedTab, setSelectedTab] = useState("saved");
  const [selectedProjects, setSelectedProjects] = useState(
    projects.savedProjects
  );

  // window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    dispatch(handleData(true, LOADING_START));
    dispatch(handleData({}, FETCH_MY_PROJECTS));
    dispatch(handleData({}, FETCH_SAVED_PROJECTS));
  }, []);

  useEffect(() => {
    setSelectedProjects(selectedTab === "saved" ? projects.savedProjects : selectedTab === "liked" ? projects.likedProjects : projects.recommendedProjects);
  }, [projects]);

  const onChangeTab = (tab) => {
    if (tab === selectedTab) {
      return true;
    }

    setSelectedTab(tab);
    dispatch(handleData(true, LOADING_START));

    if (tab === "saved") {
      dispatch(handleData({}, FETCH_SAVED_PROJECTS));
    } else if (tab === "liked") {
      dispatch(handleData({}, FETCH_LIKED_PROJECTS));
    } else {
      dispatch(handleData({}, FETCH_RECOMMENDED_PROJECTS));
    }

    setSelectedProjects(
      tab === "saved"
        ? projects.savedProjects
        : tab === "liked"
        ? projects.likedProjects
        : projects.recommendedProjects
    );
  };

  return (
    <div className="myProjects container">
      <LoadingOverlay active={loading} spinner text="" />
      <div className="pad">
        <h3>
          My Projects
          <span />
        </h3>
        <CarouselComponent
          projects={projects.myProjects}
          responsive={responsive}
          className="carousal_padding"
        />
      </div>
      <div className="pad">
        <h3>
          My <label>{selectedTab}</label> Projects
          <span />
        </h3>
        <div className="flex-center mt-40 mb-4">
          <div
            onClick={() => onChangeTab("saved")}
            className={`${
              selectedTab === "saved" ? "buttoncss2" : "buttoncss3"
            }`}
          >
            Saved Projects
          </div>
          <div
            onClick={() => onChangeTab("liked")}
            className={`${
              selectedTab === "liked" ? "buttoncss2" : "buttoncss3"
            }`}
          >
            Liked Projects
          </div>
          <div
            onClick={() => onChangeTab("recommended")}
            className={`${
              selectedTab === "recommended" ? "buttoncss2" : "buttoncss3"
            }`}
          >
            Recommended Projects
          </div>
        </div>
        <CarouselComponent
          projects={selectedProjects}
          responsive={responsive}
          className="carousal_padding"
        />
      </div>
    </div>
  );
}

export default myProjects;
