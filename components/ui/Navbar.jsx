import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Wrapper from './Wrapper';

const Navbar = () => {
  const [show,setShow] = useState(false);
    const [showNav,setShowNav] = useState(false);
    const [showNav2,setShowNav2] = useState(true);
    useEffect(() => {
      const changeColor = () => {
        console.log(window.scrollY);
        (window.scrollY >= 300)?setShowNav2(false):setShowNav2(true)
        
      };
      window.addEventListener("scroll", changeColor);
    }, []);
    const dynamicRoute = useRouter().asPath;

    useEffect(() => setShow(false), [dynamicRoute]);
    useEffect(() => {
      document.body.style.overflow = show?"hidden":"auto";
      return () => (document.body.style.overflow = "scroll");
  },[show]);
  return (
    <Wrapper styles='fixed inset-x-0 mx-auto w-screen'>
      <div className={`bg-[#004191] whitespace-nowrap relative z-10 text-white flex justify-end duration-300 ease-in-out ${showNav2?"mt-0":"-mt-20"} gap-6 px-4 lg:px-36 py-2 items-center`}>
      University of Stuttgart
      <span class="material-symbols-outlined rounded-full border p-1">
chevron_right
</span>
      </div>
      <div className={`flex max-w-screen relative z-50 justify-between items-center py-8 lg:px-28 ${show?"text-white bg-[#333333]":"text-black bg-white"}`}>
        <Link href='/' className='flex flex-col items-center'>
        {show?<img className='h-[45px] lg:h-[60px]' src="/assets/logo3.png" alt="" />:
        <img className='h-[45px] lg:h-[60px]' src="/assets/logo2.png" alt="" />}
        {/* <p className='-mt-6 -ml-16  text-[#333333] text-[17.6px] leading-[22.8px]'>For students</p> */}
        </Link>
          
        <div className='flex gap-2 items-center '>
        
       { !show&&<div className='hidden lg:flex flex-col group relative h-12 w-12 hover:border-2 border-black rounded-full items-center justify-center'>
        <div className=''>
          <img className='h-8 w-8 cursor-pointer' src="/assets/language.svg" alt="" />
        </div>
        <span class="material-symbols-outlined absolute top-full group-hover:hidden">
expand_more
</span>
<div className='hidden absolute top-full group-hover:flex flex-col gap-1'>
<span className='p-2 bg-gray-300 text-black rounded-full cursor-pointer'>DE</span>
<span className='p-2 bg-gray-100 text-gray-400 rounded-full cursor-pointer'>EN</span>
</div>
        </div>}
        <div className='flex items-center gap-4'>
        <span class="material-symbols-outlined hidden lg:block cursor-pointer">
search
</span>
<button onClick={()=>setShow(!show)}>
{!show?<span class="material-symbols-outlined">
menu
</span>:<span class="material-symbols-outlined">
close
</span>}</button>
        </div>
        </div>
      </div>
      <div className={`absolute custom-scroll inset-x-0 ${show?"top-0":"top-[1000%] lg:-top-[800%]"} h-screen w-full duration-300 ease-in-out   bg-[#303A3D] bg-opacity-90`}>
        <ul className='scrollbar-thin   scrollbar-thumb-[#00BCFF] flex flex-col gap-4 text-white max-w-[960px] mx-auto overflow-y-scroll mt-[11rem] h-[600px]'>
{
  [
    { title: 'All study programs', link: 'page1' },
    { title: 'Starting out', link: 'page2' },
    { title: 'Study organization', link: 'page3' },
    {
      title: 'Examination organization',
      link: 'page4'
    },
    { title: 'Digital Services', link: 'page5' },
    {
      title: 'Financing  stipends',
      link: 'financing'
    },
    {
      title: 'International students in Stuttgart',
      link: 'international'
    },
    { title: 'Study abroad', link: 'study' },
    { title: 'Counseling', link: 'counseling' },
    {
      title: 'Internships mentoring and getting on the career ladder',
      link: 'internships'
    },
    {
      title: 'Additional programs  further education during studies',
      link: 'additional'
    },
    { title: 'Getting involved', link: 'getting' },
    { title: 'University AZ', link: 'university' },
    { title: 'Contact', link: 'contact' },
    { title: 'close navigation', link: 'close' },
    { title: 'Students', link: 'students' },
    {
      title: 'Important news links documents and tips for students of the University of Stuttgart This page offers information on your studies',
      link: 'important'
    },
    {
      title: 'INFORMATION FOR PROSPECTIVE STUDENTS',
      link: 'information'
    },
    { title: 'Begriff', link: 'begriff' },
    {
      title: 'Suchen Sie nach Begriffen aus dem UniGlossar',
      link: 'suchen'
    }
  ].map((item,index)=><li key={index} className=' border-b-2 border-dotted w-full hover:bg-[#00BCFF] hover:text-[#333333] h-full'><Link href={item.link} className='py-[10px] pr-[30px] pl-[7px] leading-[32px] text-[20px] flex justify-between items-center'>{item.title}<span class="material-symbols-outlined">
  chevron_right
  </span></Link></li>)
}</ul>
      </div>
    </Wrapper>
  )
}

export default Navbar