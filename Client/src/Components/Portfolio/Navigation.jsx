import React from "react";
import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import {HashLink as Link} from 'react-router-hash-link';
export const Navigation = () => {
  const [nav, SetNav] = useState(false);
  const handleMenu = () => {
    SetNav(!nav);
  };

  const navigation = [
    {
      navigationLink: "Home",
      url: "#home",
    },
    {
      navigationLink: "Skills",
      url: "#skills",
    },
    {
      navigationLink: "Projects",
      url: "#projects",
    },
    {
      navigationLink: "About",
      url: "#about",
    },
    {
      navigationLink: "Contact",
      url: "#contact",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="flex justify-center pt-5"
      >
        <div className="hidden sm:block">
          <div className="flex mx-auto max-w-lg justify-between rounded-full">
            {navigation.map((props, index) => (
              <Link to={props.url}  key={index} className=" scroll-smooth pr-4 hover:text-purple-300 duration-500 active:scale-50">
                {props.navigationLink}
              </Link>
            ))}
          </div>
        </div>
        <div className="div " onClick={handleMenu}>
          {!nav ? (
            <div className="sm:hidden flex items-center gap-4 animate-bounce hover:animate-none">
              <RiMenu5Fill />
              Menu
            </div>
          ) : (
            <div className="sm:hidden">Close</div>
          )}
          <div
            className={
              nav
                ? "sm:hidden flex flex-col bg-[#060111] h-[100vh] w-full fixed top-0 left-0 items-center z-10 space-y-5 pt-5 "
                : "hidden"
            }
          >
            {navigation.map((props, index) => (
              <Link to={props.url} className='hover:text-purple-500 scroll-smooth' key={index}>{props.navigationLink}</Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
