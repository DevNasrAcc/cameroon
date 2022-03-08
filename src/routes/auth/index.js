import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import LoginPage from "../../views/login/LoginPage";
import RegisterPage from "../../views/register/RegisterPage";
import ForgotPasswordPage from "../../views/forgotPassword/ForgotPasswordPage";

const AuthRoutes = () => {
  return (
    <Fragment>
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/register" component={RegisterPage} />
      <Route path="/auth/forgot" component={ForgotPasswordPage} />
    </Fragment>
  );
};

export default AuthRoutes;
