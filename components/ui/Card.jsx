import React from 'react';
import Link from 'next/link';

const Card = ({image,title,tags}) => {
  return (
    <div>
        <div className='flex flex-col gap-6 items-start px-4'>
    <img className='h-[293px]' src={image} alt="" />
    <h1 className='text-[18px] leading-[25.2px] text-[#333333] font-bold'>{title}</h1>
    <ul className='flex flex-col gap-2'>
     {
      tags.map((tag, index)=><li key={index} className='flex gap-2 items-center'><span class="material-symbols-outlined">
      chevron_right
      </span><Link href={tag.link} className='text-[#004191] leading-[19.2px] font-bold' >{tag.title}</Link></li>)
     }
    </ul>
        </div>
    </div>
  )
}

export default Card