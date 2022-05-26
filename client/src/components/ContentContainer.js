import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

function ContentContainer() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default ContentContainer;
