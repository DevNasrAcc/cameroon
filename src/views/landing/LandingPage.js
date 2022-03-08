import React, { useEffect } from "react";
import CarouselComponent from "../../components/Carousel/Carousel";
import SubscribeModal from "../../components/SubscribeModal/SubscribeModal";
import "./LandingPage.css";
import { handleData } from "../../redux/actions";
import { EXPLORE_PROJECTS, LOADING_START } from "../../constants/Routes";
import { useDispatch, useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import { useTranslation } from "react-i18next";
// import "../../translations/i18n";

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

function LandingPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const projects = useSelector((state) => state.project.explore);

  window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    dispatch(handleData(true, LOADING_START));
    dispatch(handleData({}, EXPLORE_PROJECTS));
  }, []);

  return (
    <div className="landingPage">
      <h3>
        {t("explore_projects")}
        <span />
      </h3>
      <div className="text-end mt-6">
        <label className="labeltext">Sort by:</label>
        <select className="selectClass" defaultValue="Likes">
          <option value="Likes">Likes</option>
          <option value="Most Funded">Most Funded</option>
          <option value="Day Posted">Day Posted</option>
          <option value="Alphabetic Order">Alphabetic Order</option>
        </select>
        <label className="labeltext">Filter by:</label>
        <select className="selectClass" defaultValue="Categories">
          <option value="Categories">Categories</option>
          <option value="Project">Project</option>
          <option value="Objectives">Objectives</option>
        </select>
      </div>
      <LoadingOverlay active={loading} spinner text="" />
      <CarouselComponent
        projects={projects}
        responsive={responsive}
        className="carousal_padding"
      />
      {/* <SubscribeModal/> */}
    </div>
  );
}

export default LandingPage;
