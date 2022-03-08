import React from "react";
import TopHeader from "../components/TopHeader/TopHeader.module";
import Footer from "../components/Footer/Footer.module";
import { Switch } from "react-router-dom";
import AuthRoutes from "../routes/auth";

const AuthLayout = () => {
  return (
    <>
      <TopHeader page="auth" />
      <Switch>
        <AuthRoutes />
      </Switch>
      <Footer page="auth" />
    </>
  );
};

export default AuthLayout;
