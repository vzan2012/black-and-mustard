import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      Copyright &copy; {year} - Black &amp; Mustard - All Rights Reserved
    </div>
  );
};

export default Footer;
