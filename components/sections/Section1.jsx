import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Section1 = () => {
  return (
      <div className='flex flex-col items-center my-16 max-w-[990px] mx-auto px-2'>
     <div className='bg-[#EEEEEE] flex flex-col items-start gap-4 max-w-[630px] w-screen mx-auto p-3 leading-[20.8px] mb-6 text-[#333333]'>
      <p>Begriff</p>
      <input placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar" className=' w-full mb-[15px] leading-[20px] text-[14px] shadow-s placeholder:text-[#555555]' type="text" name="" id="" />
     <Button>BEGRIFF SUCHEN</Button>
     </div>
     <div className='grid lg:grid-cols-3 my-16 gap-6'>
   {[
    {image:'https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_118.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335',
      title:'Digital services',
    tags:[
      {
        title: 'CMPUS  campus management and lectures',
        link: 'cmpus'
      },
      { title: 'How to CMPUS', link: 'how' },
      { title: 'ILIAS', link: 'ilias' },
      {
        title: 'University library',
        link: 'university'
      },
      { title: 'Email', link: 'email' },
      {
        title: 'Further digital services',
        link: 'further'
      }
    ]},
    {image:'https://www.student.uni-stuttgart.de/img/easydb-IMG_0423.jpg?__scale=w:370,h:370,cx:0,cy:250,cw:1500,ch:1500',
      title:'Digital services',
    tags:[
      {
        title: 'CMPUS  campus management and lectures',
        link: 'cmpus'
      },
      { title: 'How to CMPUS', link: 'how' },
      { title: 'ILIAS', link: 'ilias' },
      {
        title: 'University library',
        link: 'university'
      },
      { title: 'Email', link: 'email' },
      {
        title: 'Further digital services',
        link: 'further'
      }
    ]},
    {image:'https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_113.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335',
      title:'Digital services',
    tags:[
      {
        title: 'CMPUS  campus management and lectures',
        link: 'cmpus'
      },
      { title: 'How to CMPUS', link: 'how' },
      { title: 'ILIAS', link: 'ilias' },
      {
        title: 'University library',
        link: 'university'
      },
      { title: 'Email', link: 'email' },
      {
        title: 'Further digital services',
        link: 'further'
      }
    ]},
   ].map((item,index) =>  <Card key={index} image={item.image} title={item.title} tags={item.tags} />)}
     </div>
     <Button>{"STUDY PROGRAMS' WEBPAGES FOR STUDENTS"}</Button>
      </div>
    
  )
}

export default Section1