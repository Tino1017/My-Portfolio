import React from "react";
import { ReactTyped } from "react-typed";
import HeroImage from "../Images/HeroImage.jpg";
import { FaFileArrowDown } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const iconStyles =
    "hover:opacity-20 active:scale-50 ease-in-out duration-700";
  return (
    <div className="HeroSection flex flex-col h-[91vh] md:max-w-5xl justify-center items-center space-y-10 mx-5 md:flex md:items-start md:mx-auto md:space-y-0 md:my-0 ">
      <div>
        <div className="TextAndImage flex flex-col items-center gap-10 md:flex-row md:items-center md:space-x-20 ">
          <div className="div order-2 md:order-1">
            <motion.h1
            initial={{opacity:0,y:-70}}
            whileInView={{opacity:1,y:0}}
            transition={{ease:'backInOut',duration:0.8,delay:0.7}}
            className="text-4xl md:text-5xl max-w-1xl font-semibold">
              Hi, I'm <span style={{ color: "#9482EB" }}>Tinotenda.</span>
              <br /> I'm a{" "}
              <span style={{ color: "#9482EB" }}>Front-End Developer</span>
            </motion.h1>
          </div>
          <motion.div
          initial={{opacity:0,y:-70}}
          whileInView={{opacity:1,y:0}}
          transition={{ease:'backInOut',duration:1}}
            className="div flex justify-center  backdrop-blur-sm bg-white/30 p-2 animate-pulse order-1 w-48"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
          >
            <motion.img
            initial={{opacity:0,y:-70}}
            whileInView={{opacity:1,y:0}}
            transition={{ease:'backInOut',duration:1,delay:0.4}}
              src={HeroImage}
              width={150}
              alt=""
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
      initial={{opacity:0,y:-70}}
      whileInView={{opacity:1,y:0}}
      transition={{ease:'backInOut',duration:1,delay:0.9}}
      className=" flex items-center gap-10 md:flex md:justify-center">
        <button className=" rounded-full p-3 flex items-center gap-4 font-semibold text-md  active:scale-50 duration-700 hover:opacity-20">
          RESUME
          <FaFileArrowDown fontSize={30} />
        </button>
        <a href="" className={`${iconStyles}`}>
          <FaGithub fontSize={30} />
        </a>
        <a href="" className={`${iconStyles}`}>
          {" "}
          <FaLinkedinIn fontSize={30} />
        </a>
        <a href="" className={`${iconStyles}`}>
          {" "}
          <MdEmail fontSize={30} />
        </a>
      </motion.div>
    </div>
  );
};
