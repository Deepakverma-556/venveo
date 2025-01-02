import React from 'react'

const FooterLinks = ({ myClass, text }) => {
    return (
        <a href="#links" className={`font-maisonLight max-sm:font-maisonMedium text-[15px] leading-[30px] max-sm:leading-[15px] text-white hover:text-lemon transition-all duration-300 ${myClass}`}>{text}</a>
    )
}

export default FooterLinks