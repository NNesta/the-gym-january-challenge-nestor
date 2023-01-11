import React from 'react';
import Link from 'next/link';
import {CiLocationOn} from 'react-icons/ci'

const ContactSection = () => {
  return (
    <div className='my-8'>
        <h1 className='text-xl font-semibold'>Contact</h1>
        <div className="grid lg:grid-cols-3 gap-8">
            <div className='flex flex-col gap-6 border border-black p-8'>
                <img className='h-32 w-32 object-contain rounded-full self-center' src="https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000" alt="" />
                    <h1 className='text-3xl font-semibold max-w-[242px]'>Dezernat Internationales</h1>
                    <div className='flex items-center gap-2'>
                   <Link href=''>Profile page</Link>
                    </div>
                    <div className='flex items-center gap-2'>
                   <Link href=''>	+49 711 685 68566</Link>
                    </div>
                    <div className='flex items-center gap-2'>
                   <Link href=''>	Write e-mail</Link>
                    </div>
                    <span className='flex items-start gap-2'>
                   <Link className='text-sm whitespace-nowrap' href=''>Office hours (online)</Link>
                   <span>:Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon</span>
                    </span>
            </div>
            <div className='flex flex-col gap-6 border border-black p-8'>
                <img className='h-32 w-32 object-contain rounded-full self-center' src="https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620" alt="" />
                    <h1 className='text-3xl font-semibold max-w-[242px]'>Student Counseling Center</h1>
                    <div className='flex items-center gap-2'>
                   <Link href=''>Profile page</Link>
                    </div>
                    <div className='flex items-center gap-2'>
                   <Link href=''>	+49 711 685 82133</Link>
                    </div>
                   
            </div>
            <div className='flex flex-col gap-6 border border-black p-8'>
                <div className='h-32 w-32 object-contain rounded-full self-center bg-gray-200 flex items-center justify-center'>
                  <CiLocationOn size={30}/>
                  </div>
                  <div>

                    <h1 className='text-3xl font-semibold max-w-[242px]'>Student Service and Examination Office</h1>
                    <p>Pfaffenwaldring 5 c, 70569 Stuttgart, House of students</p>
                  </div>
                    <div className='flex items-center gap-2'>
                   <Link href=''>	Further information</Link>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default ContactSection