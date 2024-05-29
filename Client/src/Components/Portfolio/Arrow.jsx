import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { HashLink as Link } from 'react-router-hash-link';

export const Arrow = () => {
  return (
   <div className='flex justify-center items-center h-[20px] sm:h-[40px] animate-pulse '>
    <Link to='#about' className='text-secondary text-center' ><MdKeyboardDoubleArrowDown fontSize={25}/></Link>
   </div>
  )
}

