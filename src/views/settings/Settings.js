import React, { useEffect } from "react";
import Button from "../../components/Button/Button.module";
import { useHistory } from "react-router-dom";

import "./Settings.css";
import { useDispatch, useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import { handleData } from "../../redux/actions";
import {
  FETCH_USER_ACCOUNT_INFO,
  FETCH_USER_PROFILE,
  LOADING_START,
  SEND_ACCOUNT_STATUS_INFO,
  SEND_SUBSCRIPTION_INFO,
} from "../../constants/Routes";

function Settings() {
  let history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const user = useSelector((state) => state.user.accountInfo);

  useEffect(() => {
    dispatch(handleData(true, LOADING_START));
    dispatch(handleData({}, FETCH_USER_ACCOUNT_INFO));
  }, []);

  const onChangeUserSubscription = () => {
    if (user) {
      const payload = { subscription: !user.subscription };
      dispatch(handleData(true, LOADING_START));
      dispatch(handleData(payload, SEND_SUBSCRIPTION_INFO));
    }
  };

  const onChangeAccountStatus = () => {
    if (user) {
      const payload = {
        account: user.accountStatus === "active" ? "inactive" : "active",
      };
      dispatch(handleData(true, LOADING_START));
      dispatch(handleData(payload, SEND_ACCOUNT_STATUS_INFO));
    }
  };

  return (
    <div className="settings">
      <LoadingOverlay active={loading} spinner text="" />
      <div className="container">
        <div className="gray-rectangle mt-4 mb-4">
          <h5 className="text-center">Settings</h5>
        </div>
        <div className="gray-rectangle mb-4">
          <h6>Unsubscribe to Emails</h6>
        </div>
        <div className="font-Poppins pad50">
          <div className="input-fields">
            <p>
              By deactivating your account, you will no longer receive emails
              regarding the latest updates and trending projects. You will still
              receive critical updates about your account, your projects, or any
              contributions.
            </p>
          </div>
          <div className="mt-4 text-center">
            <Button onClick={onChangeUserSubscription} className="buttoncss4">
              {user && user.subscription ? "Unsubscribe" : "Subscribe"}
            </Button>
          </div>
        </div>
        <div className="gray-rectangle mb-4">
          <h6>Deactivate Your Account</h6>
        </div>
        <div className="font-Poppins pad50">
          <div className="input-fields mb-4">
            <p>
              By deactivating your account, you will no longer be able to log
              in, manage any contributions, and will lose any draft projects and
              all your data.
            </p>
          </div>
          <div className="mt-4 mb-80 text-center">
            <Button onClick={onChangeAccountStatus} className="buttoncss4">
              {user && user.accountStatus === "active"
                ? "Deactivate"
                : "Activate"}{" "}
              Account
            </Button>
            <Button onClick={() => history.push("/")} className="buttoncss5">
              Back to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
