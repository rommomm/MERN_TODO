import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.scss";
import { AuthContext } from "../../context/AuthContext";

function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { authMe, isLogin } = useContext(AuthContext);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const SignInHandler = async () => {
    try {
      const response = await axios
        .post(
          "/api/auth/signin",
          { ...form },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          authMe(response.data.token, response.data.userId);
        })
        .then(() => navigate("/"));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="container">
      <div className="sign-in">
        <h3>Sign in</h3>
        <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="validate"
                onChange={changeHandler}
              />
            </div>
            <div className="input-field col s12">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="validate"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row">
            <button
              onClick={SignInHandler}
              className="wawes-effect wawes-light btn purple"
            >
              Sign in
            </button>
            <Link to="/signup" className="btn-outline btn-req">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
