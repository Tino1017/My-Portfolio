import React from "react";
import ProjectsUI from "./UI/ProjectsUI";
import helpconnect from "../Images/helpconnect.png";
import kickCraze from "../Images/kickCraze.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { Design } from "./UI/Design";


export const MyProjects = () => {
  const [projectActive, setProjectActive] = useState();
  const [designActive, setDesignActive] = useState();
  const handleProjectClick = () => {
    setDesignActive(!projectActive);

    setProjectActive(!projectActive)
      ? setDesignActive(designActive)
      : setProjectActive(!projectActive);
  };

  
const designProjectsArray=[{project:<iframe
  width="330"
  height="450"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FSOvmydeJ9XRyXLAm0DETCp%2FUntitled%3Fnode-id%3D1-135%26t%3DTLGcLn4iCw507cah-1%26scaling%3Dscale-down%26page-id%3D0%253A1"
  allowfullscreen
></iframe>}]

  const projectCard = [
    {
      projectImage: helpconnect,
      projectName: "Help Connect",
      description:
        "This is a web Application that connects lecturers and students. This web app contains features like video call and a student community ",
      liveDemo: "",
      repoLink: "https://github.com/Tino1017/Help-Connect",
    },
    {
      projectImage: kickCraze,
      projectName: "Kick Craze",
      description:
        "This is a web Application where users can shop for sneakers. This web app contains features like video call and a student community",
      liveDemo: "https://github.com/Tino1017/Kick-Craze",
      repoLink: "https://kick-craze.vercel.app/...",
    },
  ];
  const technologiesUsed = [
    "React",
    "Redux",
    "Tailwind Css",
    "SASS",
    "Node JS",
    "Typescript",
    "HTML",
    "Express",
    "Mongoose",
    "MongoDB",
  ];

  return (
    <div className="flex flex-col justify-center items-center" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "backInOut", duration: 0.8, delay: 0.7 }}
        className="text-4xl font-semibold mt-14"
      >
        My Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "backInOut", duration: 0.8, delay: 0.8 }}
        className="flex gap-5 backdrop-blur-md rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 my-7 items-center"
      >
        <button
          className={
            !projectActive
              ? "bg-primary px-2 py-1 rounded-full"
              : "bg-transparent text-gray-400"
          }
          onClick={handleProjectClick}
        >
          Front-End Projects
        </button>
        <button
          className={
            designActive
              ? "bg-primary px-2 py-1 rounded-full "
              : "bg-transparent text-gray-400"
          }
          onClick={handleProjectClick}
        >
          Design Projects
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ ease: "backInOut", duration: 0.8, delay: 0.9 }}
        className={
          !designActive
            ? "flex flex-col gap-y-12  px-5 sm:px-20 md:px-10 md:gap-0 lg:flex-row sm:justify-between lg:items-center lg:justify-center lg:space-x-10"
            : "hidden"
        }
      >
        {projectCard.map((props, index) => (
          <ProjectsUI
            key={index}
            projectImage={props.projectImage}
            projectName={props.projectName}
            description={props.description}
            demoLink={props.liveDemo}
            repoLink={props.repoLink}
          />
        ))}
      </motion.div>
      <div
        className={
          designActive ? "block font-semibold text-xl p-3  backdrop-blur-md rounded-md bg-purple-500 bg-opacity-10" : "hidden"
        }
      >
        {designProjectsArray.map((props,index)=>(
          <div className="">
            <Design key={index}
          designProject={props.project}
          />
          </div>
          
        ))}


      </div>
    </div>
  );
};
