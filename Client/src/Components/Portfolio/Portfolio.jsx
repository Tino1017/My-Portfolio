import React from "react";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { SkillSection } from "./SkillSection";
import { About } from "./About";
import{ Contact} from "./Contact";
import { MyProjects } from "./MyProjects";

export const Portfolio = () => {
  return (
    <>
     
      <Navigation />
      <HeroSection />
      <About/>
      <SkillSection/>
      <MyProjects/>
      <Contact/>
    </>
  );
};
