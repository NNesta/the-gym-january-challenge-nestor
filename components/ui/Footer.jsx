import React from 'react';
import Link from 'next/link';
import Wrapper from './Wrapper';
import {ImFacebook, ImTwitter, ImLinkedin} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs';
import {TfiYoutube} from 'react-icons/tfi';

const Footer = () => {
  return (
    <Wrapper styles='text-white bg-[#333333] my-8 py-20'>
      <div className='py-8 px-16 flex flex-col gap-12'>
      <div className='flex flex-col lg:flex-row gap-16 '>
        <img className='h-12' src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg" alt="" />
        <div className='flex flex-wrap justify-center gap-4 items-center'>
          <div className='flex flex-col gap-4 items-center'><div className='p-4 border rounded-full hover:bg-[#004191] duration-200 ease-in-out cursor-pointer'><ImFacebook className=' h-6 w-6'/></div><h4>Facebook</h4></div>
          <div className='flex flex-col gap-4 items-center'><div className='p-4 border rounded-full hover:insta duration-300 ease-in-out cursor-pointer'><BsInstagram className=' h-6 w-6'/></div><h4>Instagram</h4></div>
          <div className='flex flex-col gap-4 items-center'><div className='p-4 border rounded-full hover:bg-[#00BEFF] duration-200 ease-in-out cursor-pointer'><ImTwitter className=' h-6 w-6'/></div><h4>Twitte</h4></div>
          <div className='flex flex-col gap-4 items-center'><div className='p-4 border rounded-full hover:bg-red-800 duration-200 ease-in-out cursor-pointer'><TfiYoutube className=' h-6 w-6'/></div><h4>Youtube</h4></div>
          <div className='flex flex-col gap-4 items-center'><div className='p-4 border rounded-full hover:bg-blue-400 duration-200 ease-in-out cursor-pointer'><ImLinkedin className=' h-6 w-6'/></div><h4>Linkedin</h4></div>
          <div className='flex flex-col gap-4 items-center'><div className='p-4 border rounded-full group hover:bg-white duration-200 ease-in-out cursor-pointer'><img src='/assets/usus.svg' className='group-hover:hidden h-8 w-8 object-contain'/><img src='/assets/usus2.svg' className='group-hover:block hidden h-8 w-8 object-contain'/></div><h4>USUS-Blog</h4></div>
        </div>
        
      </div>
      <div className='grid lg:grid-cols-4 gap-4'>
      <ul className='flex flex-col gap-1'>
        <li className='text-xl font-semibold'>Audience</li>
        {[
  { title: 'Students', link: 'students' },
  { title: 'Employees', link: 'employees' },
  {
    title: 'Alumni and supporters',
    link: 'alumni'
  },
  { title: 'Industry', link: 'industry' }
].map((item,index)=><li key={index}><Link className='underline hover:no-underline' href={item.link}>{item.title}</Link></li>)}
      </ul>
      <ul className='flex flex-col gap-1'>
        <li className='text-xl font-semibold'>Formalities</li>
        {[
  { title: 'Legal notice', link: 'legal' },
  { title: 'Privacy notice', link: 'privacy' },
  { title: 'Accessibility', link: 'accessibility' },
  { title: 'Certificates', link: 'certificates' }
].map((item,index)=><li key={index}><Link className='underline hover:no-underline' href={item.link}>{item.title}</Link></li>)}
      </ul>
      <ul className='flex flex-col gap-1'>
        <li className='text-xl font-semibold'>Services</li>
        {[
  { title: 'Contact', link: 'contact' },
  { title: 'Press', link: 'press' },
  { title: 'Jobs', link: 'jobs' },
  {
    title: 'Apply for a Doctorate or Postdoc',
    link: 'apply'
  },
  { title: 'UniShop', link: 'unishop' }
].map((item,index)=><li key={index}><Link className='underline hover:no-underline' href={item.link}>{item.title}</Link></li>)}
      </ul>
      <ul className='flex flex-col gap-1'>
        <li className='text-xl font-semibold'>Organization</li>
        {[
  {
    title: 'Faculties and Institutes',
    link: 'faculties'
  },
  { title: 'Facilities', link: 'facilities' },
  {
    title: 'Central Administration',
    link: 'central'
  }
].map((item,index)=><li key={index}><Link className='underline hover:no-underline' href={item.link}>{item.title}</Link></li>)}
      </ul>
        </div></div>
    </Wrapper>
  )
}

export default Footer