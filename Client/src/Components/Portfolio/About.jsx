import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    const styles="text-md min-w-sm max-w-sm p-5 text-center md:min-w-md md:max-w-4xl md:text-center"
  return (
    <div className="flex flex-col items-center" id="about" >
      <motion.h1 
     initial={{opacity:0,y:-70}}
     whileInView={{opacity:1,y:0}}
     transition={{ease:'backInOut',duration:0.8,delay:0.7}}
      className="text-center font-semibold text-4xl pb-10">About Me </motion.h1>
      <motion.p
       initial={{opacity:0,y:-70}}
       whileInView={{opacity:1,y:0}}
       transition={{ease:'backInOut',duration:1,delay:0.9}} className={styles}>
        I am a passionate Front-End Developer and Figma UI/UX Designer with a keen
        eye for detail and a love for creating seamless user experiences. With a
        solid foundation in web development and a flair for design, I thrive at
        the intersection of aesthetics and functionality.I aim to craft clean,
        efficient, and maintainable code to build interactive and responsive web
        applications, while utilizing Figma to design user interfaces that are not
        only visually appealing but also highly functional and user-centric.
        Building and customizing WordPress sites to meet diverse client needs,
        ensuring ease of use and scalability.
      </motion.p>
      <motion.p
       initial={{opacity:0,y:-70}}
       whileInView={{opacity:1,y:0}}
       transition={{ease:'backInOut',duration:1,delay:0.94}}
      className={styles}>
        My journey into the world of front-end designing and design began with a
        fascination for how websites and applications work. Over the years, I
        have honed my skills in HTML, CSS, JavaScript, Typescript and frameworks
        like React enabling me to build responsive and dynamic web applications.
        My expertise in Figma has further allowed me to bring designs to life,
        ensuring that each project not only looks great but also delivers an
        intuitive and enjoyable user experience.
      </motion.p>
      <motion.p
       initial={{opacity:0,y:-70}}
       whileInView={{opacity:1,y:0}}
       transition={{ease:'backInOut',duration:1,delay:0.94}} className={styles}>
        My goal is to create solutions that are both beautiful and practical. I
        am constantly learning and staying up-to-date with the latest industry
        trends to ensure that my work remains innovative and relevant.I am
        currently on an exciting journey to expand my skill set by diving into
        React Native for mobile app development and backend development.
      </motion.p>
    </div>
  );
};
