import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./Navbar.scss";
function Navbar() {
  const { isLogin, signOut } = useContext(AuthContext);

  return (
    <nav>
      <div className="nav-wrapper navbar purple ">
        <Link to="/" className="brand-logo">
          MERN TODO
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {isLogin ? (
              <Link to="/signin" onClick={signOut}>
                Sign out
              </Link>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
