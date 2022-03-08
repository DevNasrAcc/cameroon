import React from "react";
import TopHeader from "../components/TopHeader/TopHeader.module";
import Footer from "../components/Footer/Footer.module";
import PrivateRoutes from "../routes/private";

const PrivateLayout = () => {
  return (
    <>
      <TopHeader page="private" />
      <main>
        <PrivateRoutes />
      </main>
      <Footer page="private" />
    </>
  );
};

export default PrivateLayout;
