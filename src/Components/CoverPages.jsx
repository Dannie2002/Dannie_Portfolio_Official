import React from "react";
import AboutMe from "./AboutMe";
import LandingPage from "./LandingPage";
import LetsConnect from "./LetsConnect";
import ScrollWords from "./ScrollWords"
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";


const CoverPages = () => {
  return (
    <>
   
      <LandingPage />
      <AboutMe />
      <Projects />
      <LetsConnect />
      <WorkExperience />
    </>
  );
};

export default CoverPages;