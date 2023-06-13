import React from "react";

import "../styles/global.css";
import Header from "./header/Header";

const CommonLayout = ({ children }) => {
  return (
    <div id="main">
      <Header />
      {children}
    </div>
  );
};

export default CommonLayout;
