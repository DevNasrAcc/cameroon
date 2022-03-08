import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import LandingPage from "../../views/landing/LandingPage";

const PublicRoutes = () => {
  return (
    <Fragment>
      <Route exact path="/" component={LandingPage} />
    </Fragment>
  );
};

export default PublicRoutes;
