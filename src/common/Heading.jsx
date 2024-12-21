import React from 'react'

const Heading = ({ text, myClass, spanText, secondText, image, myAlt, imgClass }) => {
    return (
        <h2 className={`${myClass} font-sohne text-black text-[80px] leading-[70px] text-center`}>{text} <span className={`relative`}>{spanText} <img src={image} alt={myAlt} className={`absolute ${imgClass} left-1/2 -translate-x-1/2`} /></span>{secondText}</h2>
    )
}

export default Heading