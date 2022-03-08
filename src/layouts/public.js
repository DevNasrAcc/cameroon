import React from "react";
import TopHeader from "../components/TopHeader/TopHeader.module";
import Footer from "../components/Footer/Footer.module";
import PublicRoutes from "../routes/public";
import { Container } from "react-bootstrap";
import Header from "../components/Header/Header.module";

const PublicLayout = () => {
  return (
    <>
      <TopHeader page="public" />
      <Header />
      <Container>
        <PublicRoutes />
      </Container>
      <Footer page="public" />
    </>
  );
};

export default PublicLayout;
