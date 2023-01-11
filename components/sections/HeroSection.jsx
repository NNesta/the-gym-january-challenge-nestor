import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div id='hero'>
    <div className=' pt-44'>
    <div className='flex flex-col px-2 lg:flex-row justify-center gap-8 lg:items-center bg-[#00BEFF] h-[320px]'>

    <div className='max-w-[660px]'>
      <h1 className='text-4xl text-[#262626] text-[32px] leading-[41.6px]'>Students</h1>
      <p className='text-[#262626] text-[17px] leading-[20px] pt-5'>Important news, links, documents, and tips for students of the University of Stuttgart: This page offers information on your studies.</p>
    </div>
    <div className='w-[270px] hidden lg:flex h-[270px] uppercase rounded-full group hover:bg-white bg-[#333333] text-white flex-col  justify-center items-center px-5 -mb-28'>
   <h3 className='-mb-16 max-w-[180px] text-[14px] font-semibold text-white group-hover:text-[#333333] leading-[18.2px]'>Information for prospective student</h3>
   <span class="material-symbols-outlined mt-16 group-hover:text-[#333333] ">
chevron_right
</span>
    </div>
    <div className='flex lg:hidden items-center text-[#333333] gap-6'>
    <span class="material-symbols-outlined mt-16 group-hover:text-[#333333] ">
chevron_right
</span> 
    <h3 className='-mb-16  text-[16px] uppercase font-bold underline   leading-[18.2px]'>Information for prospective student</h3>

    </div>
    </div>
    </div>
    <Link href='#hero' className='fixed bg-[#004191] hover:bg-[#333333] duration-300 ease-in-out group right-8 lg:right-48 bottom-16 w-12 h-12 lg:h-20 lg:w-20 rounded-full flex items-center justify-center '>
   <img className='group-hover:-translate-y-4 duration-300 ease-in-out' src="/assets/arrowup.svg" alt="" />
    </Link>
    </div>
  )
}

export default HeroSection