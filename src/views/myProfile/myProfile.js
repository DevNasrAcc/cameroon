import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./myProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { handleData } from "../../redux/actions";
import { FETCH_USER_PROFILE, LOADING_START } from "../../constants/Routes";
import LoadingOverlay from "react-loading-overlay";

function myProfile() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const user = useSelector((state) => state.user.profile);

  useEffect(() => {
    dispatch(handleData(true, LOADING_START));
    dispatch(handleData({}, FETCH_USER_PROFILE));
  }, []);

  return (
    <div className="myprofile">
      <div className="container">
        <div className="gray-rectangle mt-4">
          <h5 className="text-center">My Profile</h5>
        </div>
        <div className="text-center mt-40 mb-4">
          <Link to="/app/my-profile" className="buttoncss2 mr-4">
            Basic Info
          </Link>
          <Link to="/app/edit-profile" className="buttoncss3">
            Edit Profile
          </Link>
        </div>
        <LoadingOverlay active={loading} spinner text="" />
        <div style={{ display: "flex", maxWidth: "500px", margin: "0 auto" }}>
          <div className="mt-4 userdetails padding">
            <div>
              <p>User Name</p>
            </div>
            <p>
              <span>{user ? user.userName : ""}</span>
            </p>

            <p>
              Full Name:{" "}
              <span>{user ? user.firstName + " " + user.lastName : ""}</span>
            </p>
            <p>
              Email: <span>{user ? user.email.address : ""}</span>
            </p>
            <p>
              Address: <span>{user ? user.address : ""}</span>
            </p>
            <p>
              Outside Links:{" "}
              <span>
                {user && user.socialMediaLinks
                  ? user.socialMediaLinks.website
                  : ""}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default myProfile;
