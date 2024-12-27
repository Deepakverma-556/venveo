import React from 'react'
import { LearnMoreArrow } from '../utils/icons'

const CustomLink = ({ myHref, text, myClass }) => {
    return (
        <a href={myHref} className={`${myClass} flex items-center font-maisonDemi text-[15px] leading-5 gap-2 group hover:!text-lemon transition-all duration-300 max-w-max`}>{text} <LearnMoreArrow myClass='group-hover:fill-lemon transition-all duration-300' svgClass="group-hover:translate-x-1 transition-all duration-300" /></a>
    )
}

export default CustomLink