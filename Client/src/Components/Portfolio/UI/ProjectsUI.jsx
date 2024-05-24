import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { GiEarthAsiaOceania } from "react-icons/gi";

export const ProjectsUI = ({
  projectName,
  projectImage,
  description,
  liveDemo,
  repository,
  repoLink,
  demoLink,
  technologies,
}) => {
  return (
    <div className=" text-md p-3   backdrop-blur-md rounded-lg bg-purple-500 bg-opacity-10">
      <div>
        <img src={projectImage} className="rounded-md md:max-w-md" alt="" />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-bold text-3xl pt-10 pb-2">{projectName}</h1>
        <h2 className="max-w-md sm:max-w-md">{description}</h2>
        {/* <div className="">
          <p>{technologies}</p>
        </div> */}
        <div className="flex gap-5 pt-5 pb-5">
          <a
            className="flex items-center gap-2 hover:opacity-60 active:scale-50 duration-700"
            href={demoLink}
          >
            <IoLogoGithub fontSize={20} />
            Repository
          </a>
          <a
            className="flex items-center gap-2 hover:opacity-60 active:scale-50 duration-700"
            href={repoLink}
          >
            <GiEarthAsiaOceania fontSize={20} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsUI;
