import React from 'react'

const Description = ({myClass, text}) => {
  return (
      <p className={`${myClass} font-maisonMono text-[15px] leading-5 text-black`}>{text}</p>
  )
}

export default Description