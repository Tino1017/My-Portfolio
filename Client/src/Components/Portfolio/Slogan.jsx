import React from 'react';

export const Slogan = () => {
  return (
    <div className='relative  flex justify-center items-center align-middle min-h-[380px]'>
        <p className='text-4xl text-center font-semibold max-w-xl'>
        Blending <span className='text-secondary'>Creativity and Code</span> to Build Engaging Digital <span className='text-secondary'> Experiences That Users Love  </span> 
        </p> 
        
        <div className='absolute bg-secondary rounded-full h-64 w-64 z-[-1] blur-2xl opacity-25'></div>
      
    </div>
  )
}

