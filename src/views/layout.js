import React from "react";
import Header from "../components/Header/Header.module";
import Footer from "../components/Footer/Footer.module";

const Layout = ({ protectedPage, children }) => {
  return (
    <>
      <Header protectedPage={protectedPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
