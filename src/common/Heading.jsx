import React from 'react'

const Heading = ({ text, myClass, spanText, secondText, image, myAlt, imgClass }) => {
    return (
        <h1 className={`${myClass} font-sohne text-black text-[80px] leading-[70px] text-center`}>{text} <span className={`relative`}>{spanText} <img src={image} alt={myAlt} className={`absolute ${imgClass}`} /></span>{secondText}</h1>
    )
}

export default Heading