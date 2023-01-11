import React from 'react';
import Wrapper from '../ui/Wrapper';

const HeroSection = () => {
  return (
    <div className='flex justify-center gap-8 items-center bg-[#00BEFF] h-[320px] '>

    <div className='max-w-[660px]'>
      <h1 className='text-4xl text-[#262626] text-[32px] leading-[41.6px]'>Students</h1>
      <p className='text-[#262626] text-[17px] leading-[20px] pt-5'>Important news, links, documents, and tips for students of the University of Stuttgart: This page offers information on your studies.</p>
    </div>
    <div className='w-[270px] h-[270px] uppercase rounded-full group hover:bg-white bg-[#333333] text-white flex flex-col  justify-center items-center px-5 -mb-28'>
   <h3 className='-mb-16 max-w-[180px] text-[14px] font-semibold text-white group-hover:text-[#333333] leading-[18.2px]'>Information for prospective student</h3>
   <span class="material-symbols-outlined mt-16 group-hover:text-[#333333] ">
chevron_right
</span>
    </div>
    </div>
  )
}

export default HeroSection