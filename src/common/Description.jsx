import React from 'react'

const Description = ({myClass, text}) => {
  return (
      <p className={`${myClass} font-maisonBook text-[15px] leading-5 text-black `}>{text}</p>
  )
}

export default Description