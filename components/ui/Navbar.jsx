import React from 'react';
import Wrapper from './Wrapper';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='bg-[#004191] text-white flex justify-end gap-6 px-36 py-2 items-center'>
      University of Stuttgart
      <span class="material-symbols-outlined rounded-full border p-1">
chevron_right
</span>
      </div>
      <div className='flex text-black justify-between items-center py-8 lg:px-8'>
        <div className='flex flex-col items-center'>
        <img className='h-[45px] lg:h-[60px]' src="/assets/logo2.png" alt="" />
        {/* <p className='-mt-6 -ml-16  text-[#333333] text-[17.6px] leading-[22.8px]'>For students</p> */}
        </div>
          
        <div className='flex gap-2 items-center'>
        <div className='hidden lg:flex flex-col'>
          <img className='h-6' src="/assets/language.svg" alt="" />
        <span class="material-symbols-outlined">
expand_more
</span>
        </div>
        <div className='flex items-center gap-4'>
        <span class="material-symbols-outlined hidden lg:block">
search
</span>
<span class="material-symbols-outlined">
menu
</span>
        </div></div>
      </div>
    </Wrapper>
  )
}

export default Navbar