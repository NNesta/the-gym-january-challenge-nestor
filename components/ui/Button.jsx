import React from 'react'

const Button = ({children,style}) => {
  return (
    <button className={`bg-[#004191] text-white hover:bg-[#333333] px-[35px] py-[16px] leading-[16.9px] text-[13px] text-center font-bold uppercase ${style}`}>
   {children}
    </button>
  )
}

export default Button