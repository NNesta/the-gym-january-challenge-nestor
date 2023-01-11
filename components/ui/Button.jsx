import React from 'react'

const Button = ({children,style}) => {
  return (
    <button className={`bg-blue-500 text-white hover:bg-black px-6 py-3 uppercase ${style}`}>
   {children}
    </button>
  )
}

export default Button