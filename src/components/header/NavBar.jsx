import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <div id="menubar">
      <ul id="menu">
        <li>
          <Link to="/" activeClassName="selected">
            Home
          </Link>
        </li>
        <li>
          <Link to="/examples" activeClassName="selected">
            Examples
          </Link>
        </li>
        <li>
          <Link to="/page" activeClassName="selected">
            Single Page
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="selected">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
