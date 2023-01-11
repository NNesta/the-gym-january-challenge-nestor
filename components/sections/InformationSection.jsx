import React from 'react';
import StudentCard from '../ui/StudentCard';

const InformationSection = () => {
  return (
    <div className='bg-[#004394] '>
      <div className='max-w-[960px] mx-auto'>
        <h1 className='text-[26px] leading-[33.8px] my-5 font-bold text-white'>Information for students</h1>
        <div className='grid lg:grid-cols-2 gap-10'>
        {
            new Array(14).fill(0).map((e,i)=><StudentCard key={i} title='All study programs' description='On the webpages of your degree program you will find information on the study program structure, …' />)
        }</div></div>
    </div>
  )
}

export default InformationSection