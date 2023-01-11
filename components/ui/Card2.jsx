import React from 'react'

const Card2 = ({image,title,category,date,source,desc,note}) => {
  return (
    <div className='flex flex-col gap-2'>
        {image&&<img src={image} alt="" />}
        <h1 className="text-3xl font-bold">{title}</h1>
        {desc&&<p>{desc}</p>}
        <div className='flex items-center gap-2'>
            <p>{category}</p>
            <hr className='w-[1px] h-4' />
            {date &&<p>{date}</p>}
            { date&&<p>{source}</p>}
      {note &&<p>{note}</p>}
        </div>
    </div>
  )
}

export default Card2