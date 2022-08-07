import React, { Suspense, lazy } from "react";
import Intro from "./Intro";
import Services from "./Services";
import AboutMe from "./AboutMe";
import Navbar from "../Navbar/Navbar";

const MyWork = lazy(() => import("./MyWork"));

function template() {
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
      <Suspense fallback={<div></div>}>
        <MyWork />
      </Suspense>
    </div>
  );
}

export default template;
