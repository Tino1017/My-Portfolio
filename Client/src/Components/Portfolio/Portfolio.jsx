import React from "react";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { SkillSection } from "./SkillSection";
import { About } from "./About";
import{ Contact} from "./Contact";
import { MyProjects } from "./MyProjects";
import { Arrow } from "./Arrow";

// import { Slogan } from "../Portfolio/Slogan";

export const Portfolio = () => {
  return (
    <>
     
      <Navigation />
      <HeroSection />
      <Arrow/>
      {/* <Slogan/> */}
      <About/>
      <SkillSection/>
      <MyProjects/>
      <Contact/>
    </>
  );
};
