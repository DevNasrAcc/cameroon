import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleData } from "../../redux/actions";
import {LIKE_PROJECT, LOADING_START, SAVE_PROJECT, SHARE_PROJECT} from "../../constants/Routes";
import { useHistory } from "react-router-dom";
import { getItem } from "../../localStorage/LocalStorage";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {ShareProjectSwal} from "../../constants/SweetAlert";

const ShareProjectSwalContent = withReactContent(Swal);

const Card = ({ project, className, image, width, addbtn, onClick }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userId = getItem("userid");

  const photo = project ? project?.details.photos[0].url : image;
  const title = project ? project.details.title : "N/A";
  const longDescription = project ? project.details.longDescription : "N/A";
  const shortDescription = project ? project.details.shortDescription : "N/A";
  const location = project ? project.details.address?.location : "N/A";

  const [isUserLiked, setIsUserLiked] = useState(false);

  useEffect(() => {
    if (project) {
      setIsUserLiked(!!project.isLiked);
    }
  }, [project]);

  const onProjectActionHandler = (e, type) => {
    e.stopPropagation();

    const payload = { _id: project._id };
    if (type === "like") {
      dispatch(handleData(payload, LIKE_PROJECT));
      setIsUserLiked(!isUserLiked);
    } else if (type === "save") {
      dispatch(handleData(payload, SAVE_PROJECT));
    }
  };

  const redirectEditProjectHandler = (e) => {
    e.stopPropagation();
    history.push(`/app/edit-project/${project._id}`);
  };

  const onShareProjectHandler = async (e) => {
    e.stopPropagation();

    const shareProject = async () => {
      const swalVal = await ShareProjectSwalContent.fire(ShareProjectSwal);
      let v = swalVal && swalVal.value || swalVal.dismiss;

      if (v && v.firstName && v.lastName && v.email && v.message || v === 'cancel') {
        if (v !== 'cancel') {
          const payload = {
            projectId: project._id,
            userId: userId,
            firstName: v.firstName,
            lastName: v.lastName,
            email: v.email,
            message: v.message
          };

          dispatch(handleData(true, LOADING_START));
          dispatch(handleData(payload, SHARE_PROJECT));
        }
      } else {
        await ShareProjectSwalContent.fire({ type: 'error', title: 'All fields are required!!' });
        await shareProject();
      }
    };

    await shareProject();
  };

  return (
    <div
      className={className}
      style={{ width: width, cursor: "pointer" }}
      onClick={onClick}
    >
      <div style={{ position: "relative" }}>
        <img className="card-img-top" src={photo} alt="Card image cap" />
        {project.owner === userId && addbtn === true ? (
          <div
            onClick={(e) => redirectEditProjectHandler(e)}
            className="button regular-btn buttoncss"
          >
            Edit <i className="ml-2 fa fa-plus" />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="card-body">
        <p className="text_category">
          CATEGORY | SUB-CATEGORY
          <span>
            <i
              className={isUserLiked ? "fa fa-heart red" : "far fa-heart"}
              onClick={(e) => onProjectActionHandler(e, "like")}
            />
            <i className="fa fa-share-alt" onClick={onShareProjectHandler} />
            <i
              className="far fa-bookmark"
              onClick={(e) => onProjectActionHandler(e, "save")}
            />
          </span>
        </p>
        <hr />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{longDescription}</p>
        <p className="card-text2">{shortDescription}</p>
        <div className="selectClass2">
          <i className="fa fa-map-marker-alt locIcon" />
          {location}
        </div>
      </div>
    </div>
  );
};

export default Card;
