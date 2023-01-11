import React from 'react';
import Link from 'next/link';

const ContactCard = ({image,title,page,phone,email, hours}) => {
  return (
    <div className='p-4 border border-black flex flex-col gap-4'>
        <img className='rounded-full' src={image} alt="" />
        <div className='flex gap-2'>
     <Link href={page}></Link>
        </div>
        <div className='flex gap-2'>
     <Link href={phone}></Link>
        </div>
        <div className='flex gap-2'>
     <Link href={email}></Link>
        </div>
        <div className='flex gap-2'>
     <Link href={email}></Link>
        </div>
    </div>
  )
}

export default ContactCard