import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("form", form);
  };

  const SignUpHandler = async () => {
    try {
      await axios.post(
        "/api/auth/signup",
        { ...form },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="container">
      <div className="sign-up">
        <h3>Sign in</h3>
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