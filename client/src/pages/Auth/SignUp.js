import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss";

function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("form", form);
  };

  const SignUpHandler = async () => {
    try {
      const data = await axios
        .post(
          "/api/auth/signup",
          { ...form },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => navigate("/signin"));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="container">
      <div className="sign-up">
        <h3>Sign up</h3>
        <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="validate"
                onChange={changeHandler}
              />
            </div>
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
              onClick={SignUpHandler}
              className="wawes-effect wawes-light btn purple"
            >
              Sign up
            </button>
            <Link to="/signin" className="btn-outline btn-req">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
