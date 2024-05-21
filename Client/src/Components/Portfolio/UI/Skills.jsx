import React from 'react'
import { motion } from 'framer-motion'
export const SkillsUI = ({icon,label}) => {
  return (
    <motion.div 
    initial={{opacity:0,scale:-0.7}}
    whileInView={{opacity:1,scale:1}}
    transition={{ease:'backInOut',duration:1.3}}
    className='flex flex-row items-center justify-start gap-2 rounded-md px-1 py-1 ' ><img src={icon} width={22} alt="" /><p>{label}</p></motion.div>
  )
}

