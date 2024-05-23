import React from "react";
import ProjectsUI from "./UI/ProjectsUI";
import helpconnect from "../Images/helpconnect.png";
import kickCraze from '../Images/kickCraze.png'
import { useState } from "react";

export const MyProjects = () => {
const [projectActive,setProjectActive]=useState()
const handleProjectClick = () => { 
    setProjectActive(!projectActive)
 }

  const projectCard = [
    {
      projectImage: helpconnect,
      projectName: "Help Connect",
      description:
        "This is a web Application that connects lecturers and students. This web app contains features like video call and a student community ",
      liveDemo: "#",
      repoLink: "https://github.com/Tino1017/Help-Connect",
    
    },
    {
        projectImage: kickCraze,
        projectName: "Kick Craze",
        description:
          "This is a web Application where users can shop for sneakers. This web app contains features like video call and a student community",
        liveDemo: "https://kick-craze.vercel.app/",
        repoLink: "https://github.com/Tino1017/Kick-Craze",
      
      }
  ];
  const technologiesUsed=['React','Redux','Tailwind Css','SASS','Node JS','Typescript','HTML','Express','Mongoose','MongoDB']

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mt-14">My Projects</h1>
      <div className="flex gap-5 backdrop-blur-md rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 my-7 items-center">
        <button className={!projectActive?'bg-primary px-2 py-1 rounded-full':'bg-transparent'}onClick={handleProjectClick}>Front-End Projects</button>
        <button className={projectActive?'bg-primary px-2 py-1 rounded-full':'bg-transparent'}onClick={handleProjectClick}>Design Projects</button>
      </div>
      <div className="flex flex-col gap-y-12  px-5 sm:px-20 md:px-10 md:gap-0 lg:flex-row sm:justify-between lg:items-center lg:justify-center lg:space-x-10 ">
        {projectCard.map((props, index) => (
          <ProjectsUI
            key={index}
            projectImage={props.projectImage}
            projectName={props.projectName}
            description={props.description}
          />
        ))}
      </div>
      
    </div>
  );
};
