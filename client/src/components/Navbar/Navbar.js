import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper navbar purple ">
        <Link to="/" className="brand-logo">
          MERN TODO
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
