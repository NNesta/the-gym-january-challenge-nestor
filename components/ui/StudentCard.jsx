import React from 'react';

const StudentCard = ({title,description}) => {
  return (
    <div className='flex items-center gap-4 text-white'>
      <span class="material-symbols-outlined border p-8 rounded-full">
chevron_right
</span>
<div className='flex flex-col gap-2'>
    <h1 className='text-2xl font-semibold'>{title}</h1>
    <p className='max-w-[316px]'>{description}</p>
    </div>  
    </div>
  )
}

export default StudentCard