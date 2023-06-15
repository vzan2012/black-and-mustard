import React from "react";
import { Link } from "gatsby";

const Logo = ({ caption }) => {
  return (
    <div id="logo">
      <div id="logo_text">
        <h1>
          <Link to="/">
            black<span className="logo_colour"> &amp; mustard</span>
          </Link>
        </h1>
        <h2>{caption}</h2>
      </div>
    </div>
  );
};

export default Logo;
