import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "../../styles/global.css";

const CommonLayout = ({ children }) => {
  return (
    <div id="main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
