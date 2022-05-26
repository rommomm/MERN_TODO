import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";

function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("form", form);
  };

  const SignInHandler = async () => {
    try {
      await axios.post(
        "/api/auth/signin",
        { ...form },
        {
          headers: {
            "Content-Type": "aplication/json",
          },
        }
      );
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
