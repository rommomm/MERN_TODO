import React from "react";
import ContentContainer from "./ContentContainer";
import Navbar from "./Navbar/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <ContentContainer />
    </div>
  );
}

export default MainLayout;
