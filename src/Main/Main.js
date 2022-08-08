import React from "react";
import Intro from "./Intro";
import Services from "./Services";
import AboutMe from "./AboutMe";
import Navbar from "../Navbar/Navbar";
import MyWork from "./MyWork";

function Main() {
  return (
    <div className="main">
      {/* Navbar */}
      <Navbar />

      {/* Intoduction */}
      <Intro />

      {/* My Services */}
      <Services />

      {/* About Me */}
      <AboutMe />

      {/* My Work */}
      <MyWork />
    </div>
  );
}

export default Main;
