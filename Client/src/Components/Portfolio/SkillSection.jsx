import React from "react";
import { useState } from "react";
import { SkillsUI } from "./UI/Skills";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import css from "../Images/css.svg";
import html from "../Images/html.svg";
import js from "../Images/js.svg";
import npm from "../Images/npm.svg";
import typescript from "../Images/typescript.svg";
import wordpress from "../Images/wordpress.svg";
import redux from "../Images/redux.svg";
import tailwindcss from "../Images/tailwindcss.svg";
import react from "../Images/react.svg";
import nodejs from "../Images/nodejs.svg";
import figma from '../Images/figma.svg';
import responsive from '../Images/responsive.svg';
import wireframe from '../Images/wireframe.svg';
import product from '../Images/product.svg';
import prototype from '../Images/prototype.svg';
import { motion } from "framer-motion";


export const SkillSection = () => {
  const [headingActive, setHeadingActive] = useState(false);
  const handleHeadingClick = () => {
    setHeadingActive(!headingActive);
  };

  const frontEndObject = [
    {
      icon: html,
      icon: css,
      label: "HTML & CSS",
    },
    {
      icon: tailwindcss,
      label: "TAILWIND",
    },
    {
      icon: react,
      label: "REACT JS",
    },
    {
      icon: js,
      label: "JAVASCRIPT",
    },
    {
      icon: npm,
      label: "NPM ",
    },
    {
      icon: redux,
      label: "REDUX",
    },
    {
      icon: typescript,
      label: "TYPESCRIPT",
    },
    {
      icon: wordpress,
      label: "WORDPRESS",
    },
    {
      icon: nodejs,
      label: "NODE",
    },
  ];
  const designerLabel = [
    {
     icon:figma,
     label:'FIGMA'
    },
    {
     icon:responsive,
     label:'RESPONSIVE DESIGN'
    },
    {
     icon:wireframe,
     label:'WIRE FRAMING'
    },
    {
     icon:prototype,
     label:'USER FLOWS'
    },
    {
     icon:product,
     label:'PRODUCT DESIGN'
    },
    {
    
      label:'SITE MAPS'
    },
    {
      label:'INTERACTION DESIGN'
    }
   ];

  return (
    <div className="flex flex-col justify-center items-center mt-3">
      <motion.h1 initial={{opacity:0,y:-70}}
            whileInView={{opacity:1,y:0}}
            transition={{ease:'backInOut',duration:0.8,delay:0.7}} className="text-4xl font-semibold my-10">My Skills </motion.h1>
      <div className="flex flex-col items-center  backdrop-blur-sm bg-purple-300 bg-opacity-5 rounded-3xl px-5 py-8 min-w-[355px] max-h-fit max-w-sm sm:max-w-xl md:max-w-6xl md:px-10 ">
        <h1
          className="text-center font-bold active:scale-75 duration-200 mb-[1px] "
          onClick={handleHeadingClick}
        >
          {headingActive ? " UI UX DESIGN" : "FRONT END DEVELOPMENT"}
        </h1>
        <h1
          className="text-center font-bold opacity-30 active:scale-75 duration-200 mb-10"
          onClick={handleHeadingClick}
        >
          {!headingActive ? " UI UX DESIGN" : "FRONT END DEVELOPMENT"}
        </h1>

        <div
          className={`${
            !headingActive
              ? "grid grid-cols-2 gap-y-10 gap-x-5 sm:grid sm:grid-cols-3 sm:gap-y-10 sm:gap-x-6 lg:grid lg:grid-cols-4 md:gap-x-20"
              : "hidden"
          }`}
        >
          {frontEndObject.map((props, index) => (
            <SkillsUI key={index} icon={props.icon} label={props.label} />
          ))}
        </div>
        {/* UI UX Skills */}
        <div className={`${headingActive ? "grid gap-y-8 p-5  sm:grid sm:grid-cols-2 sm:gap-y-10 sm:gap-x-6 lg:grid lg:grid-cols-3 md:gap-x-20 duration-700" : "hidden"}`}>
          {designerLabel.map((props, index) => (
            <SkillsUI key={index} icon={props.icon} label={props.label} />
          ))}
        </div>
        <button className="hover:opacity-60 hover:scale-110 active:scale-75 duration-150">
          <IoIosArrowDroprightCircle
            fontSize={40}
            style={{ color: "#9482EB", marginTop: "30px" }}
          />
        </button>
      </div>
    </div>
  );
};
