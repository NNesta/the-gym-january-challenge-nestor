import React from 'react';

const StudentCard = ({title,description}) => {
  return (
    <div className='flex items-center gap-4 text-white group'>
      <span class="material-symbols-outlined border-2 border-white p-6 lg:p-12 rounded-full group-hover:bg-white duration-300 ease-out group-hover:text-[#333333]">
chevron_right
</span>
<div className='flex flex-col gap-2'>
    <h1 className='text-[22px] leading-[28.6px] font-bold'>{title}</h1>
    <p className='max-w-[316px] font-light leading-[25.6px]'>{description}</p>
    </div>  
    </div>
  )
}

export default StudentCard