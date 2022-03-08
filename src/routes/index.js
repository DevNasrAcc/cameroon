import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import PublicLayout from "../layouts/public";
import AuthLayout from "../layouts/auth";
import PrivateLayout from "../layouts/private";
import history from "./../history";
import { ToastContainer } from "react-toastify";

const BaseRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" component={AuthLayout} />
        <Route path="/app" component={PrivateLayout} />
        <Route path="/" component={PublicLayout} />
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default BaseRoutes;
