import React from "react";
import AboutMe from "./AboutMe";
import LandingPage from "./LandingPage";
import LetsConnect from "./LetsConnect";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";



const CoverPages = () => {
  return (
    <>
   
      <LandingPage />
      <AboutMe />
      <Projects />
      <WorkExperience className="hidden" />
      <LetsConnect />
   
    </>
  );
};

export default CoverPages;