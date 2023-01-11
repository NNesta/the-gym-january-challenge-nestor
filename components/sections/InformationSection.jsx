import React from 'react';
import StudentCard from '../ui/StudentCard';

const InformationSection = () => {
  return (
    <div className='bg-[#004394] py-16 px-8'>
        <h1 className='text-4xl font-semibold text-white px-16 py-8'>Information for students</h1>
        <div className='grid lg:grid-cols-2 gap-10 px-16'>
        {
            new Array(14).fill(0).map((i)=><StudentCard title='All study programs' description='On the webpages of your degree program you will find information on the study program structure, …' />)
        }</div>
    </div>
  )
}

export default InformationSection