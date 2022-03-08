import React, { Fragment } from "react";
import ExploreProjects from "../../views/exploreProjects/ExploreProjects";
import createProject from "../../views/createProject/createProject";
import editProject from "../../views/editProject/editProject";
import myProfile from "../../views/myProfile/myProfile";
import editProfile from "../../views/editProfile/editProfile";
import settings from "../../views/settings/Settings";
import myProjects from "../../views/myProjects/myProjects";
import myInvestment from "../../views/myInvestment/myInvestment";
import viewProject from "../../views/viewProject/viewProject";
import confirmInvestment from "../../views/confirmInvestment/confirmInvestment";
import confirmDonation from "../../views/confirmDonation/confirmDonation";

import { Redirect, Route } from "react-router-dom";
import { getItem } from "../../localStorage/LocalStorage";

const PrivateRoutes = () => {
  const user = getItem("userid");
  return (
    <Fragment>
      {user ? (
        <Fragment>
          <Route path="/app/projects" component={ExploreProjects} />
          <Route path="/app/view-project/:id" component={viewProject} />
          <Route path="/app/create-project" component={createProject} />
          <Route path="/app/edit-project/:id" component={editProject} />
          <Route path="/app/my-profile" component={myProfile} />
          <Route path="/app/edit-profile" component={editProfile} />
          <Route path="/app/settings" component={settings} />
          <Route path="/app/my-projects" component={myProjects} />
          <Route path="/app/my-investment" component={myInvestment} />
          <Route path="/app/confirm-investment" component={confirmInvestment} />
          <Route path="/app/confirm-donation" component={confirmDonation} />
        </Fragment>
      ) : (
        <Redirect to="/auth/login" />
      )}
    </Fragment>
  );
};

export default PrivateRoutes;
