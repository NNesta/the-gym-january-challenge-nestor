import React from 'react';
import Link from 'next/link';

const Section2 = () => {
  return (
    <div className='bg-[#333333] py-16'>
      <div className=''>
        <h1 className="text-3xl font-bold text-white">News and events for students</h1>
   <div className="grid lg:grid-cols-3 gap-8">
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-6 bg-white'>
        <h1 className="text-3xl font-semibold">Newsticker: Information on the coronavirus</h1>
        <div className="flex items-center gap-2">
          <p>Article</p>
          <hr className='w-[1px] h-2' />
          <p>11/10/22</p>
        </div>
      </div>
      <div className='flex flex-col gap-6 bg-white'>
        <img src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333" alt="" />
        <p>Everyone feels sometimes stressed during their studies. But what can you do against it? Constanza has a few tips.</p>
        <div className="flex items-center gap-2">
          <p>USUS blog</p>
          <hr className='w-[1px] h-2' />
          <p> 1/4/23</p>
        </div>
      </div>
      <div className='flex flex-col gap-6 bg-white'>
        <img src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073" alt="" />
        <h1 className="text-4xl font-bold">Sim & Tech solve their 3rd case</h1>
        <div className="flex items-center gap-2">
          <p>News</p>
          <hr className='w-[1px] h-2' />
          <p> 12/19/22</p>
        </div>

      </div>
    </div>
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-6 bg-white'>
        <img src="https://www.uni-stuttgart.de/universitaet/aktuelles/img/IRGE_Uni-Stuttgart_HdK_Rote-Stadtbalkone_Cansu-Coban_Paul-Menz.jpg?__scale=w:320,h:320,cx:0,cy:0,cw:2000,ch:2000" alt="" />
        <h1 className="text-3xl font-semibold">Exhibition in the House of Cultures Stuttgart at the City Hall</h1>
        <div className="flex items-center gap-2">
          <p>Event</p>
          <hr className='w-[1px] h-2' />
          <p>1/12 – 1/25/23</p>
        </div>
      </div>
      <div className='flex flex-col gap-6 bg-white'>
<img src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333" alt="" />   
<h1 className="text-4xl font-bold">{"The University of Stuttgart's five most beautiful Instagram pictures"}</h1>
        <div className="flex items-center gap-2">
          <p>Article</p>
          <hr className='w-[1px] h-2' />
          <p> 12/21/22</p>
        </div>
        <p>Photo: Addictive Stock / photocase.de </p>
      </div>
      <div className='flex flex-col gap-6 bg-white'>
<img src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832" alt="" />      
  <h1 className="text-4xl font-bold">Diversity calendar makes diversity visible</h1>
        <div className="flex items-center gap-2">
          <p>News</p>
          <hr className='w-[1px] h-2' />
          <p> Diversity calendar makes diversity visible</p>
        </div>

      </div>
    </div>
    <div className='flex flex-col gap-8'>
      
      <div className='flex flex-col gap-6 bg-white'>
<img src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720" alt="" /> 
<h1 className="text-4xl font-bold">{'Latest episode: "Intelligent systems will help us in crises and in the future"'}</h1>   
     <div className="flex items-center gap-2">
          <p>Video</p>
          <hr className='w-[1px] h-2' />
          <p>Video</p>
        </div>
      </div>
      <div className='flex flex-col gap-6 bg-white'>
        <h1 className="text-4xl font-bold">Impressive research in the field of business administration</h1>
        <div className="flex items-center gap-2">
          <p>News</p>
          <hr className='w-[1px] h-2' />
          <p> 12/21/22</p>
        </div>

      </div>
      <div className='flex flex-col gap-6 bg-white'>
        <img src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000" alt="" />
        <h1 className="text-3xl font-semibold">Energy savings in November</h1>
        <div className="flex items-center gap-2">
          <p>Article</p>
          <hr className='w-[1px] h-2' />
          <p>12/15/22</p>
        </div>
      </div>
    </div>
   </div>
      </div>
      <div className='flex items-center text-white justify-center py-6 gap-2'>
      <Link className='border py-4 px-8 text-sm font-medium' href='news'>ALL NEWS</Link>  
      <Link className='border py-4 px-8 text-sm font-medium' href='events'>ALL EVENTS</Link>  
      </div>
    </div>
  )
}

export default Section2