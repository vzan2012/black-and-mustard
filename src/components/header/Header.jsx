import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div id="header">
      <Logo caption="Simple. Contemporary. Website Template." />
      <NavBar />
    </div>
  );
};

export default Header;
