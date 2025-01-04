import React from 'react'
import { RightArrow } from '../utils/icons'

const CustomButton = ({ text, myClass,customOnClick }) => {
    return (
        <button onClick={customOnClick} className={`${myClass} flex items-center bg-lemon gap-[5px] text-[15px] font-maisonDemi leading-[15px] font-semibold transition-all duration-300 hover:bg-black hover:text-white right-arrow group text-nowrap`}>{text}<RightArrow svgClass="group-hover:translate-x-2 transition-all duration-300"/></button>
    )
}

export default CustomButton